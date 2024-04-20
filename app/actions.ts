'use server'

import { cookies } from "next/headers";
import { redirect } from "next/navigation";


let authenticated = false;
let user = "";

export async function auth(password: String) {

  if (password == process.env.secret) {
    authenticated = true;
  }
  return authenticated;
}

export async function getAuth() {
  return authenticated;
}

export async function setCurrentUser(authUser: string) {
  user = authUser;
}

export async function getCurrentUser() {
  return user;
}




export async function validate(userId: String, formData: FormData) {
  const rawFormData = {
    username: formData.get('username'),
    password: formData.get('password'),
  }
  const { username, password } = rawFormData;
  console.log(process.env.DB_HOST);


  if (rawFormData.username == "vic") {
    console.log("nice work");
    // cookies().set('name', `${username}`);      
    console.log(password);
    redirect("/skills")
  }

  cookies().set({
    name: `${username}`,
    value: 'lee',
    httpOnly: true,
    sameSite: "strict",
    path: '/',
  })

  console.log(password);
  redirect("/home")




  console.log(rawFormData, "in actions rn lol", userId);
}

export async function getCookies() {

  console.log(process.env.secret);

  const cookieStore = cookies();

  const hasCookie = cookieStore.has('name')
  console.log(hasCookie);
  console.log(cookieStore.getAll());
  return hasCookie;
}