import React, { useState } from "react";
import Layout from "@components/Layout";
import Title from "@components/Title";
import TextArea from "@components/TextArea";
import TextInput from "@components/TextInput";
import { Button } from "@components/Button";
import Router from "next/router";

const Draft: React.FC = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState({ content: "" });

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { name, content };
      await fetch("/api/group", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      await Router.push("/drafts");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <form onSubmit={submitData}>
        <Title>Create New Group</Title>
        <TextInput
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          value={name}
        />
        <TextArea
          cols={50}
          onChange={(e) => setContent({ content: e.target.value })}
          placeholder="Content"
          rows={8}
          value={content.content}
        />
        <Button disabled={!name || !name} type="submit">
          Create{" "}
        </Button>
        <a href="#" onClick={() => Router.push("/")}>
          or Cancel
        </a>
      </form>
    </Layout>
  );
};

export default Draft;

//TODO #2 set up Slate editor to replace textareas
