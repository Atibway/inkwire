"use server";

import jwt from "jsonwebtoken"
import { currentUser } from "./auth";

export const generateApiKey = async () => {
  const user = await currentUser();
  const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY!);
  return token;
};

export const regenerateApiKey = async () => {
  const user = await currentUser();
  const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY!);
  return token;
};
