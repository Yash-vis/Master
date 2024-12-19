import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

// Define authentication options
export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      const { name, email } = user;

      if (account?.provider === "google") {
        try {
          const response = await fetch("https://master-delta-seven.vercel.app/api/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email }),
          });

          if (!response.ok) {
            throw new Error("Failed to store user data");
          }

          console.log("User data sent successfully.");
        } catch (error) {
          console.error("Error during fetch:", error);
        }
      }

      return true;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// Export GET and POST handlers explicitly for the app directory
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
