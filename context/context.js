import { createContext, useState, useEffect, useRouter } from "react";
import { useRouter } from "next/router";
import Gun from "gun";

export const DiscordContext = createContext();

// const gun = Gun(["https://discord])
