//professor, esses comentários abaixo são meus, gosto de anotar para quando eu rever o 
// código lembrar do que fiz, não é comnetário de ia não.

const countries = [
  { code: "us", name: "United States" },
  { code: "br", name: "Brazil" },
  { code: "gb", name: "United Kingdom" },
  { code: "fr", name: "France" },
  { code: "de", name: "Germany" },
  { code: "jp", name: "Japan" },
  { code: "cn", name: "China" },
  { code: "it", name: "Italy" },
  { code: "ru", name: "Russia" },
  { code: "es", name: "Spain" },
  { code: "ca", name: "Canada" },
  { code: "in", name: "India" },
  { code: "mx", name: "Mexico" },
  { code: "kr", name: "South Korea" },
  { code: "za", name: "South Africa" },
  { code: "au", name: "Australia" },
  { code: "ar", name: "Argentina" },
  { code: "cl", name: "Chile" },
  { code: "pt", name: "Portugal" },
  { code: "gr", name: "Greece" },
  { code: "eg", name: "Egypt" },
  { code: "ng", name: "Nigeria" },
  { code: "tr", name: "Turkey" },
  { code: "sa", name: "Saudi Arabia" },
  { code: "se", name: "Sweden" },
  { code: "no", name: "Norway" },
  { code: "fi", name: "Finland" },
  { code: "nl", name: "Netherlands" },
  { code: "ch", name: "Switzerland" },
  { code: "pl", name: "Poland" }
]; //array que eu criei para conter os códigos e nomes dos paises

const container = document.getElementById("flags-container"); // criei para pegar a div que tem o flags-container,para o js inserir as bandeiras

// laço de repetição que percorre cada objeto do meu array countries
countries.forEach(country => {
  const html = `
    <div class="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4">
      <img src="https://flagcdn.com/w80/${country.code}.png" alt="${country.name}">
      <p class="mt-2">${country.name}</p>
    </div>
  `; //cria o html formatado
  container.insertAdjacentHTML("beforeend", html);
}); //Insere o HTML gerado dentro da div com ID flags-container e o "beforeend" é usado para "coloca esse conteúdo dentro da div, no final", mantendo os anteriores.

