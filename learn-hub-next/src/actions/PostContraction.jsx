"use server"

// import cookies from 'js-cookie';
export default async function PostContraction(formData) {
  // const form = new FormData();
  // form.append("name", formData.name);
  // form.append("lastname", formData.lastname);
  // form.append("telephone", formData.telephone);
  // form.append("email", formData.email);
  // form.append("preferenceTimeforContact", formData.preferenceTimeforContact);
  // form.append("message", formData.message);
  // form.append("serviceId", formData.serviceId);
  // console.log(form);
  try {
    console.log(formData)
    
    // const token = cookies.token;
    const response = await fetch(
      "http://localhost:4050/api/contractions/new",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      }
    );
    // if (!response.ok) {
    //   throw new Error(`HTTP error! Status: ${response.status}`);
    // }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}
