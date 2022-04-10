/* esta funcao vai buscar os dados do banco do json placeholder  */

export const loadPosts = async () => {
  /*buscando dados na api com fetch */
  const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts");
  const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos");

  /* Usei a promisses all para retornar quando todas as promisses forem resolvidas 
  e desestruturei as promisses em arrays */
  const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

  /* depois das promises resolvidas transformo elas em json  */
  const postsJson = await posts.json();
  const photosJson = await photos.json();

  /* como o json de fotos tem mais imagens do que posts eu estou incluindo uma imagem apenas para
  a mesma quantidade de posts existentes */
  const postsAndPhotos = postsJson.map((post, index) => {
    return { ...post, cover: photosJson[index].url };
  });

  return postsAndPhotos;
};
