import Head from "next/head";

const posts = [
  {
    id: 1,
    titulo: "Live especial hoje!",
    conteudo: "Vamos jogar Bed Wars às 20h. Cola com a gente!",
    autor: "Gabbz",
    data: "06/05/2025",
    imagem: "https://via.placeholder.com/600x300",
    categoria: "Live"
  },
  {
    id: 2,
    titulo: "Nova regra no chat",
    conteudo: "Evite spam e seja respeitoso! Moderação reforçada.",
    autor: "ModeradorX",
    data: "05/05/2025",
    imagem: "",
    categoria: "Regras"
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Avisos do Vakeiroo</title>
      </Head>
      <main className="min-h-screen px-6 py-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-neon mb-8 text-center">Avisos do Vakeiroo</h1>
        {posts.map(post => (
          <div key={post.id} className="bg-[#121212] rounded-xl p-6 mb-6 shadow-lg border border-neon">
            <h2 className="text-2xl font-semibold mb-2">{post.titulo}</h2>
            <p className="text-sm text-gray-400 mb-1">Por {post.autor} – {post.data} – {post.categoria}</p>
            {post.imagem && <img src={post.imagem} alt="Imagem" className="rounded-lg mb-3" />}
            <p>{post.conteudo}</p>
          </div>
        ))}
      </main>
    </>
  );
}
