import { createContext, useState, useEffect, useRouter } from "react";
import { useRouter } from "next/router";
import Gun from "gun";

export const DiscordContext = createContext();

const gun = Gun(["https://discord-gun-node.herokuapp.com/"]);

const reducer = (state, action) => {
  try {
    if (action.type == "clear") return { messages: [] };
    if (action.type == "add")
      return { messages: [...state.messages, action.data] };
  } catch (error) {
    console.error(error);
  }
};
