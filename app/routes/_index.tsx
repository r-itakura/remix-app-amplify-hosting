import type { MetaFunction } from "@remix-run/node";
import { redirect, json } from "@remix-run/node";
import { Form, useActionData, useLoaderData, Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [
      { title: "New Remix App" },
      { name: "description", content: "Welcome to Remix!" },
    ];
  };

  export async function loader() {
    const response = await fetch(
      "https://1kqrlqtygk.execute-api.us-east-1.amazonaws.com/dev/api/zunda-get-thread"
    );
    const data = await response.json();
  
    return json({ posts: data });
  }

  export default function Home() {
    const { posts: threads } = useLoaderData<typeof loader>();
  
    return (
      <div>
        <h1>ずんだもんとのチャットページなのだ！</h1>
        <p>スレッド一覧</p>
        <div>
          {threads["partition_key_values"].map(
            (thread: string, index: number) => (
              <div key={index}>
              <Link
                to={`/thread/${thread}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  style={{
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#f0f0f0")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                >
                  {thread}
                </div>
              </Link>
              </div>
            )
          )}
        </div>
        <div>
          <Form method="post">
            <div>
              <label htmlFor="body">新しい会話</label>
              <input type="text" name="body" id="body" />
            </div>
            <button type="submit">作成</button>
          </Form>
        </div>
      </div>
    );
  }

  export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    return redirect(`/thread/${formData.get("body")}`);
  }