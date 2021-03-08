import React, { useEffect } from "react";

const About = () => {

  useEffect(() => {
    func()
  }, [])

  const func = () => {

    createElement();
    // addAttribute();		// 아이디가 "para"인 HTML 요소에 속성을 추가함.
  }

  const createElement = () => {
    let criteriaNode = document.getElementById("text")
    let newNode = document.createElement("p")
    newNode.innerHTML = "새로운 단락입니다.";
    newNode.setAttribute("id", "para")
    document.body.insertBefore(newNode, criteriaNode);
  }

  // const addAttribute = () => {
  //   document.getElementById("para").setAttribute("style", "color:red")
  // }



  return (
    <>
      <div>this is about</div>
      <div className="new-status">
        <h2>New monolog</h2>
        <form action="">
          <textarea /><br />
          <input type="submit" value="Post" />
        </form>
      </div>

      <div className="statuses">
        <h2>Monologs</h2>
        <ul></ul>
      </div>
    </>
  );
}

export default About;