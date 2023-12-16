// signUp.ts
import { createUserWithEmailAndPassword, Auth, UserCredential, getAuth } from "firebase/auth";
import firebaseApp from "../config";

const auth: Auth = getAuth(firebaseApp);

interface SignUpResult {
  result: UserCredential | null;
  error: any;
}

export default async function signUp(email: string, password: string): Promise<SignUpResult> {
  let result: UserCredential | null = null,
    error: any = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e: any) {
    error = e;
  }

  return { result, error };
}
