import React from "react";

export default function Home() {
  return (
    <div className="px-52 pt-12">
      <h3 className="text-white text-6xl font-bold pb-6">Coming Soon 🚀</h3>

      <div className="flex flex-col gap-4 bg-white text-neutral-600 p-4 rounded-md">
        <p>
          I’ll be sharing everything I encounter during my development journey,
          that's everything from unexpected bugs to clever workarounds. Expect
          bite-sized insights, code snippets, and tips of challenges I encounter (and how I overcame them).

          You can refer to when you hit similar roadblocks.
        </p>

        <p>Stay tuned!</p>
      </div>
    </div>
  );
}
