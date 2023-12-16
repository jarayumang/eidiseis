// signIn.ts
import { signInWithEmailAndPassword, Auth, UserCredential, getAuth } from "firebase/auth";
import firebaseApp from "../config";

const auth: Auth = getAuth(firebaseApp);

interface SignInResult {
  result: UserCredential | null;
  error: any;
}

export default async function signIn(email: string, password: string): Promise<SignInResult> {
  let result: UserCredential | null = null,
    error: any = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e: any) {
    error = e;
  }

  return { result, error };
}
