function Menu() {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fuga ipsa quasi maxime, porro animi, atque sunt et quo, obcaecati tenetur ut accusamus amet a eveniet dolorum! Iure, quasi deleniti.",
      img: "https://images.unsplash.com/photo-1691603136103-bff3ade192e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    },
    {
      id: 2,
      title: "Lorem",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fuga ipsa quasi maxime, porro animi, atque sunt et quo, obcaecati tenetur ut accusamus amet a eveniet dolorum! Iure, quasi deleniti.",
      img: "https://images.unsplash.com/photo-1682686580950-960d1d513532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur 2222",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fuga ipsa quasi maxime, porro animi, atque sunt et quo, obcaecati tenetur ut accusamus amet a eveniet dolorum! Iure, quasi deleniti.",
      img: "https://plus.unsplash.com/premium_photo-1674478156472-183edfca6a41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur 2222",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fuga ipsa quasi maxime, porro animi, atque sunt et quo, obcaecati tenetur ut accusamus amet a eveniet dolorum! Iure, quasi deleniti.",
      img: "https://images.unsplash.com/photo-1691603136103-bff3ade192e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    },
  ];

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
}

export default Menu;
