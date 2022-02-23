import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const AT = process.env.AT;

async function main() {
  const url = "https://graph.facebook.com/979973122889700/feed";
  const params = new URLSearchParams();
  params.append("message", "IAmABot.");
  params.append("access_token", AT);
  const res = await fetch(`${url}?${params.toString()}`, {
    method: "POST",
    body: JSON.stringify({
      message: "This is a bot.",
    }),
  });
  console.log(await res.json());
}

main()
  .then(() => {
    console.log("success");
  })
  .catch((err) => {
    console.error("failed", err);
  });
