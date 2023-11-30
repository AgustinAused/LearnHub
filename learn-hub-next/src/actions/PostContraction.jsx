"use server"

// import cookies from 'js-cookie';
export default async function PostContraction(formData) {
  const form = new FormData();
  form.append("name", formData.name);
  form.append("lastname", formData.lastname);
  form.append("telephone", formData.telephone);
  form.append("email", formData.email);
  form.append("preferenceTimeforContact", formData.preferenceTimeforContact);
  form.append("message", formData.message);

  if (formData.image) {
    form.append("image", formData.image);
  }
  try {
    const tokenObject = cookies().get("token");
    // Convert token to string
    let tokenString = JSON.stringify(tokenObject);
    const token = tokenString.split('"')[7];
    // const token = cookies.token;
    const response = await fetch(
      `http://localhost:4050/api/services/cambiarporlaruta?servideId=${formData.servideId}`,
      {
        headers: {
          authorization: token
        },
        method: "POST",
        body: form,
      }
    );
    // if (!response.ok) {
    //   throw new Error(`HTTP error! Status: ${response.status}`);
    // }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}
