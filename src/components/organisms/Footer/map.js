import styles from './styles.module.scss';
import Client from './client';

const cities = [
  { name: 'Szczecin', left: '13.29%', top: '31.08%' },
  { name: 'Gdańsk', left: '43.50%', top: '19.93%' },
  { name: 'Olsztyn', left: '64.16%', top: '32.43%' },
  { name: 'Białystok', left: '86.27%', top: '43.92%' },
  { name: 'Poznań', left: '29.91%', top: '45.27%' },
  { name: 'Warszawa', left: '66.04%', top: '57.09%' },
  { name: 'Wrocław', left: '29.19%', top: '63.85%' },
  { name: 'Kraków', left: '48.84%', top: '80.07%' },
  { name: 'Rzeszów', left: '75.72%', top: '89.53%' }
];

const Map = ({ pages }) => {
  const pagesByCity = {};
  pages.forEach(item => {
    const city = cities.find(({ name }) => item.name.includes(name));
    if (city) {
      pagesByCity[city.name] = pagesByCity[city.name] || [];
      pagesByCity[city.name].push({ ...item, left: city.left, top: city.top });
    }
  });
  const nonEmptyCities = Object.keys(pagesByCity).filter(city => pagesByCity[city].length > 0);
  
  return (
    <div className={styles.map}>
      <Client
        cities={cities}
        pages={pages}
        nonEmptyCities={nonEmptyCities}
        Svg={Svg}
        ClickIcon={ClickIcon}
      />
    </div>
  );
};

export default Map;

const ClickIcon = (
  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
    <path
      stroke='url(#a)'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      d='M11.049 12.8l-2.626-2.626-.801.802c-.821.821-1.232 1.231-1.673 1.135-.44-.097-.641-.642-1.043-1.731L3.568 6.747c-.8-2.173-1.201-3.26-.641-3.82s1.646-.159 3.82.642l3.632 1.338c1.09.401 1.634.602 1.73 1.043.098.441-.313.852-1.133 1.672l-.802.802 2.625 2.626c.272.271.408.407.47.56a.825.825 0 010 .63c-.062.152-.198.288-.47.56-.272.272-.407.408-.56.47a.825.825 0 01-.63 0c-.152-.062-.288-.198-.56-.47z'
    ></path>
    <defs>
      <linearGradient
        id='a'
        x1='13.133'
        x2='2.032'
        y1='2.667'
        y2='3.374'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#2DD282'></stop>
        <stop offset='1' stopColor='#90F4E8'></stop>
      </linearGradient>
    </defs>
  </svg>
)

const Svg = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='346'
    height='296'
    viewBox='0 0 346 296'
  >
    <path
      fill='url(#map)'
      d='M292.822 290.383c-2.487-.857-5.262-1.768-6.167-2.025-.904-.257-2.569-1.062-3.699-1.789-1.131-.727-3.426-1.739-5.1-2.249-1.747-.533-3.265-1.583-3.562-2.465-.856-2.536-6.013-6.871-8.172-6.871-1.089 0-2.228-.378-2.531-.839-.316-.482-2.351-.738-4.776-.601-2.324.131-4.801-.1-5.505-.514-1.446-.849-4.355-7.988-5.745-14.095-.589-2.588-1.498-4.355-2.5-4.859-1.88-.946-2.061-2.716-.341-3.337.678-.245 1.233-.935 1.233-1.534s-.555-1.522-1.233-2.052c-.823-.642-1.233-2.379-1.233-5.223 0-2.343-.418-5.572-.929-7.176-.852-2.675-.733-3.19 1.453-6.251 1.311-1.834 4.523-4.746 7.139-6.471 2.616-1.725 5.569-4.375 6.563-5.891 5.893-8.987 6.726-9.911 8.952-9.936 1.217-.013 2.441-.372 2.721-.797.279-.425 1.226-.773 2.104-.773 1.35 0 1.595.552 1.595 3.587 0 4.125 1.438 5.627 5.423 5.665 2.198.021 5.266 1.941 5.266 3.295 0 .243-1.295 1.161-2.878 2.039-2.374 1.317-2.878 2.047-2.878 4.173 0 3.402 1.258 4.433 5.409 4.433 1.889 0 4.763.522 6.386 1.159 1.624.638 5.096 1.16 7.716 1.16 4.091 0 4.88-.237 5.577-1.676 1.785-3.687 5.474-3.78 9.703-.246l2.315 1.935-3.672 4.54c-2.02 2.497-4.135 5.364-4.699 6.372-.565 1.007-1.288 2.004-1.607 2.217-.874.582-7.395 10.877-7.395 11.675 0 .382-.31.694-.688.694-.378 0-1.938 2.245-3.465 4.988l-2.778 4.988 1.475 3.857c1.107 2.894 1.335 4.913.913 8.09-.651 4.9 1.035 8.586 4.278 9.351 1.463.346 1.909.989 1.909 2.755 0 2.719-.539 2.777-6.577.697z'
    />
    <path
      fill='url(#map)'
      d='M205.213 284.987c-1.483-1.541-2.175-1.579-5.711-.314-1.352.483-1.462.403-.617-.454.565-.573 1.028-2.711 1.028-4.752 0-3.707-.003-3.711-2.805-3.711-3.416 0-7.061-3.579-7.061-6.934 0-1.222-.541-2.372-1.234-2.622-.678-.245-1.233-1.1-1.233-1.9 0-3.574-1.77-6.203-4.99-7.415-2.974-1.119-3.232-1.452-3.232-4.18 0-2.149-.556-3.454-2.024-4.751l-2.023-1.788 1.818-2.219c1-1.221 3.206-3.636 4.901-5.368 3.252-3.32 3.917-5.648 1.829-6.402-2.26-.815 4.611-5.897 7.973-5.897 3.495 0 7.117-1.513 7.704-3.218.333-.969 1.666-1.35 5.407-1.546 6.685-.351 7.303.09 7.303 5.216 0 3.998 1.424 7.483 3.68 9.006 1.414.955 7.037.656 9.348-.497 2.181-1.088 12.68-4.322 14.031-4.322.987 0 1.883 4.805 2.034 10.916.075 2.998.588 5.64 1.239 6.378.729.825.794 1.259.189 1.259-1.654 0-1.086 5.275.663 6.155 1.047.527 1.913 2.285 2.552 5.176.531 2.408 1.677 5.937 2.546 7.842.868 1.906 1.38 3.652 1.138 3.88-.243.228-2.843.353-5.776.277-5.09-.132-5.335-.055-5.335 1.675 0 3.948-5.464 5.838-7.342 2.539-.962-1.689-1.576-1.839-7.864-1.919-6.406-.082-6.903.029-8.159 1.832-.736 1.056-1.988 1.92-2.783 1.92-.905 0-2.232 1.444-3.551 3.867-2.102 3.858-2.111 3.863-3.643 2.271z'
    />
    <path
      fill='url(#map)'
      d='M172.782 275.048c0-.389-1.462-2.011-3.249-3.603-2.705-2.41-3.29-3.476-3.494-6.364-.152-2.152-.713-3.671-1.479-4.003-6.368-2.757-6.166-2.528-6.166-7.009 0-4.107-.061-4.217-2.467-4.464-1.356-.139-2.818-.573-3.247-.966-.43-.392-1.65-.713-2.712-.713-2.326 0-9.334-6.629-8.686-8.216.238-.584 1.284-1.061 2.325-1.061 1.04 0 3.806-.934 6.145-2.075 3.801-1.854 4.201-2.286 3.759-4.059-1.407-5.645-1.436-7.473-.135-8.488.725-.566 1.318-1.499 1.318-2.074 0-.575 1.11-1.585 2.467-2.244 1.356-.66 2.466-1.41 2.466-1.668 0-.797-3.589-6.047-4.331-6.336-.386-.151-.109-.89.616-1.644.726-.753 1.541-2.718 1.812-4.365.27-1.647 1.222-3.654 2.113-4.459 1.287-1.163 1.538-2.165 1.215-4.854-.468-3.908.635-4.891 5.491-4.891 2.206 0 3.242.473 4.271 1.949 1.186 1.702 1.895 1.933 5.592 1.819 5.004-.154 7.642 1.154 8.338 4.134.403 1.728.954 2.148 2.815 2.148 1.298 0 2.521.509 2.786 1.159.261.638 1.005 1.16 1.654 1.16.899 0 1.078.723.75 3.021-.384 2.692-.131 3.273 2.33 5.34 2.649 2.225 2.703 2.379 1.331 3.804-1.756 1.825-1.848 3.967-.196 4.563 3.481 1.256-1.552 4.487-5.821 3.737-2.032-.357-3 .127-6.306 3.152-4.163 3.81-4.632 4.772-2.672 5.48 1.823.658 1.529 1.583-1.439 4.531-6.822 6.776-7.84 9.496-4.359 11.641 1.568.966 2.069 2.025 2.261 4.785.23 3.284.459 3.61 3.119 4.449 2.152.678 3.154 1.606 4.005 3.708 1.438 3.553.885 4.859-2.749 6.488-1.93.866-3.379 2.3-4.295 4.251-1.025 2.185-1.871 2.945-3.279 2.945-1.043 0-1.897-.319-1.897-.708z'
    />
    <path
      fill='url(#map)'
      d='M133.461 244.589c-.983-.984-1.788-2.189-1.788-2.678 0-.489-.74-1.262-1.644-1.717-.904-.455-1.644-1.196-1.644-1.646 0-.45.74-1 1.644-1.222 1.221-.301 1.644-1.055 1.644-2.933v-2.528l-5.668-.301c-5.337-.284-5.861-.482-8.953-3.39-3.344-3.144-5.276-4.31-9.582-5.78l-2.415-.826 2.621-1.498c1.502-.859 2.621-2.141 2.621-3.003 0-.927.654-1.598 1.706-1.75 1.587-.23 3.864-4.589 5.399-10.338.233-.873 2.06-3.262 4.059-5.31 1.999-2.047 3.635-4.364 3.635-5.15 0-.785.74-1.8 1.644-2.255 1.751-.881 2.267-3.092.722-3.092-.638 0-.607-.358.1-1.16.563-.637 2.089-1.159 3.39-1.159 1.818 0 2.366.358 2.366 1.546 0 1.335.548 1.546 4.01 1.546 2.562 0 4.38-.419 5.034-1.16 1.147-1.3 6.204-1.579 6.988-.386.28.425 1.724.773 3.21.773 3.042 0 5.423 1.959 5.423 4.46 0 .898.37 1.848.822 2.111 1.281.744.972 2.51-.705 4.028-.841.761-1.75 2.731-2.021 4.378-.27 1.648-1.063 3.588-1.761 4.313-1.314 1.366-1.756 4.675-.623 4.675.355 0 1.268.992 2.031 2.206 1.355 2.158 1.341 2.224-.645 3.075-1.117.479-2.031 1.357-2.031 1.952s-.602 1.551-1.337 2.125c-1.088.848-1.25 2.018-.87 6.279.358 4.019.217 5.236-.608 5.236-.591 0-2.015.695-3.165 1.546-1.149.85-3.209 1.546-4.577 1.546-2.649 0-3.931 1.838-3.099 4.445.435 1.365-1.999 4.832-3.393 4.832-.414 0-1.557-.806-2.54-1.79z'
    />
    <path
      fill='url(#map)'
      d='M93.88 237.518c-.92-.921-1.674-2.48-1.674-3.464 0-1.605-2.704-5.189-7.387-9.789-2.319-2.278-2.066-3.823.81-4.943 2.135-.832 2.466-1.36 2.466-3.929 0-2.058-.551-3.452-1.799-4.545-1.927-1.687-4.36-2.064-5.189-.803-1.48 2.253-10.277-.77-10.277-3.531 0-.736-.906-1.107-2.704-1.107-6.06 0-13.74-5.928-13.74-10.606 0-1.482-.387-1.836-1.85-1.692-1.017.1-2.896-.291-4.175-.869-3.144-1.422-5.001-.241-5.33 3.388-.218 2.41-.547 2.821-2.26 2.821-2.429 0-2.516-.729-.39-3.269.889-1.063 2.225-3.632 2.97-5.709.744-2.078 2.051-5.147 2.905-6.822 1.793-3.515 1.944-5.169.588-6.443-.73-.688-.735-1.379-.017-2.86.96-1.984 2.935-2.588 3.86-1.181 1.552 2.362 7.81-.283 7.81-3.301 0-2.147 1.61-2.295 2.448-.224.44 1.088 1.272 1.974 1.848 1.968 3.027-.03 4.742-1.109 5.586-3.512.5-1.423 1.625-2.802 2.5-3.063 1.085-.324 1.76-1.459 2.117-3.558.369-2.164.859-2.962 1.646-2.678.616.222 1.12.067 1.12-.344 0-.412.05-1.01.111-1.329.203-1.063 2.865-2.409 5.253-2.655 2.184-.226 2.414.005 3.079 3.088.924 4.289 2.836 4.112 5.18-.478l1.701-3.331 3.438 3.507c1.89 1.929 3.438 4.206 3.438 5.062 0 1.024 1.511 2.499 4.42 4.315 5.924 3.699 12.16 4.43 16.629 1.951l3.059-1.697 1.717 1.684c1.211 1.187 1.415 1.79.69 2.044-.565.198-1.028 1.16-1.028 2.137 0 1.455.656 1.932 3.62 2.634 3.569.845 3.625.909 3.959 4.537.187 2.023.5 4.201.697 4.839.263.855-.291 1.145-2.109 1.106-2.739-.06-4.456 1.494-4.496 4.067-.015.931-.396 1.908-.849 2.171-.452.263-.822 1.112-.822 1.887 0 .775-1.635 3.084-3.635 5.132-1.999 2.047-3.825 4.436-4.058 5.309-1.536 5.749-3.812 10.108-5.399 10.338-1.064.154-1.707.823-1.707 1.775 0 .889-1.03 2.08-2.461 2.845-1.354.725-2.464 1.777-2.467 2.339-.003.562-.56 1.543-1.238 2.181-1.907 1.792-1.488 3.328 1.644 6.025 3.604 3.103 3.62 4.1.076 4.725-1.54.272-4.117 1.628-5.726 3.013l-2.924 2.519-1.674-1.675z'
    />
    <path
      fill='url(#map)'
      d='M217.573 234.192c-2.259-1.526-3.681-5.009-3.681-9.018 0-5.312-.99-5.924-8.714-5.387-6.109.426-8.927-.421-7.106-2.133 1.874-1.763 1.187-5.021-1.509-7.154-2.392-1.892-2.478-2.15-1.581-4.707.523-1.488 1.232-2.705 1.576-2.705.821 0 2.535-3.567 2.535-5.275 0-1.094.599-1.283 3.289-1.042l3.288.295v-3.091c0-2.019-.423-3.243-1.219-3.531-.694-.25-1.01-.952-.734-1.629.345-.845 1.646-1.188 4.508-1.188 3.428 0 4.023-.221 4.023-1.494 0-.822.74-1.715 1.644-1.985.905-.27 1.645-1.121 1.645-1.89 0-3.453 4.378-3.772 5.282-.385.294 1.099 1.299 2.054 2.45 2.325 1.074.254 2.772 1.348 3.774 2.431 1.659 1.793 2.228 1.931 6.347 1.531 3.901-.379 4.579-.247 4.914.956.222.799 1.724 1.772 3.512 2.276 1.718.484 3.583 1.4 4.144 2.036 1.318 1.492 5.256 1.49 6.575-.003.563-.638 2.191-1.16 3.618-1.16 2.557 0 2.625.099 4.57 6.618 1.943 6.515 1.95 6.655.451 9.083-.837 1.356-2.016 2.745-2.62 3.087-.604.342-1.817 1.947-2.696 3.567-.959 1.767-3.205 3.916-5.611 5.367-4.13 2.492-8.401 6.466-8.401 7.817 0 .421-1.017.978-2.261 1.237-5.12 1.069-13.914 3.633-15.953 4.652-2.385 1.191-4.745 1.386-6.059.499z'
    />
    <path
      fill='url(#map)'
      d='M291.175 227.439c-1.582-.573-4.376-1.068-6.207-1.1-5.929-.105-7.171-3.369-2.227-5.857 1.689-.85 3.201-2.186 3.361-2.968.439-2.155-3.008-5.145-5.964-5.174-3.969-.038-5.406-1.545-5.406-5.665v-3.587h-3.24c-1.782 0-3.469.348-3.749.773-.279.425-1.173.773-1.986.773-2.273 0-4.546-8.846-4.269-16.613.122-3.398.612-6.405 1.09-6.683.51-.296.635-1.415.303-2.712-.311-1.215-.925-4.122-1.364-6.46-.563-2.996-1.401-4.718-2.836-5.827-2.593-2.005-2.605-3.45-.028-3.45 2.901 0 4.568-2.727 4.568-7.471 0-2.218.37-4.249.822-4.512 1.179-.684 1.017-4.824-.205-5.274-.565-.209.182-.63 1.661-.938 1.479-.307 2.889-.861 3.132-1.232.243-.37 2.641-.673 5.327-.673 2.708 0 4.885-.344 4.885-.773 0-.425 1.505-.773 3.344-.773 2.97 0 3.286-.173 2.822-1.546-.364-1.08-.148-1.546.718-1.546.682 0 1.469.348 1.749.773.717 1.091 3.841.916 5.562-.312.798-.569 2.305-2.558 3.349-4.42 2.14-3.816 4.96-4.742 8.116-2.663 1.011.666 2.438 1.21 3.171 1.21.734 0 2.409.87 3.723 1.932 1.313 1.063 2.719 1.932 3.123 1.933.406 0 .535 2.728.288 6.109-.282 3.878-.122 6.412.439 6.939.63.593.489 1.242-.494 2.263-.977 1.015-1.379 2.824-1.379 6.208 0 4.131.278 5.003 2.056 6.456 1.78 1.456 2.055 2.324 2.055 6.485 0 4.255.278 5.083 2.432 7.251 2.605 2.623 7.434 10.493 7.434 12.116 0 .541.505 1.262 1.122 1.602.617.34 1.743 1.76 2.501 3.154 1.242 2.285 1.253 2.654.111 3.728-1.752 1.647-1.595 2.877.788 6.179 2.338 3.24 2.498 4.85.907 9.147-1.201 3.245-3.204 5.081-5.54 5.081-1.28 0-6.467 4.55-9.213 8.08-.917 1.179-1.289 1.084-4.176-1.073-2.454-1.834-3.988-2.368-6.794-2.368-3.166 0-3.803.293-5.026 2.314-1.201 1.985-1.868 2.307-4.689 2.26-1.809-.029-4.584-.522-6.167-1.096z'
    />
    <path
      fill='url(#map)'
      d='M192.368 201.606c-.662-.996-1.93-1.611-3.323-1.611-1.7 0-2.376-.461-2.754-1.875-.874-3.273-3.368-4.696-8.234-4.696-3.65 0-4.644-.302-5.715-1.739-1.094-1.469-2.049-1.739-6.134-1.739-2.661 0-5.078.365-5.371.811-.323.491-1.3.034-2.476-1.16-1.247-1.265-2.822-1.971-4.4-1.971-1.352 0-2.686-.347-2.965-.773-.28-.425-1.412-.773-2.516-.773-1.103 0-2.006-.294-2.006-.654 0-.361-.74-1.457-1.645-2.438-1.982-2.149-2.139-5.609-.319-7.029.729-.569 2.529-.937 4.001-.818 3.272.265 3.655-.701 3.789-9.547.14-9.292.485-10.004 4.996-10.281 5.233-.322 8.028-3.02 6.659-6.429-1.318-3.284-.126-5.915 2.825-6.233 1.907-.206 2.346-.663 2.553-2.656.173-1.671.864-2.67 2.261-3.269 1.266-.542 2.016-1.512 2.024-2.617.018-2.434 1.087-3.789 3.819-4.839 2.076-.799 2.699-.65 5.624 1.342 2.995 2.041 3.728 2.204 8.221 1.83 2.714-.226 6.183-.513 7.709-.637 2.963-.241 3.756.486 4.587 4.206.29 1.298 1.418 2.571 2.927 3.305 2.204 1.072 2.454 1.569 2.454 4.884 0 2.03.444 4.109.987 4.619.573.539 3.322.927 6.562.927 5.415 0 5.589.062 6.066 2.126.269 1.17.892 2.906 1.383 3.858 1.33 2.58-1.267 5.081-4.568 4.399-3.896-.804-5.421 3.504-2.208 6.238.905.77 1.644 2.146 1.644 3.058 0 .912.408 2.041.905 2.509.659.619.435.991-.822 1.366-.95.284-1.735.927-1.745 1.43-.01.503-.742 1.784-1.626 2.847-.885 1.063-1.616 2.518-1.626 3.233-.01.715-.759 1.522-1.663 1.792-.904.269-1.644 1.163-1.644 1.984 0 1.273-.595 1.494-4.023 1.494-2.91 0-4.161.339-4.522 1.223-.87 2.131-.542 4.222.734 4.682 1.577.569 1.617 3.372.048 3.372-.651 0-1.413-.348-1.692-.773-1.105-1.681-2.855-.632-3.665 2.197-.468 1.634-1.57 3.75-2.449 4.703l-1.598 1.732-1.069-1.61z'
    />
    <path
      fill='url(#map)'
      d='M247.604 191.882c-.561-.636-2.426-1.552-4.145-2.036-1.837-.518-3.288-1.473-3.524-2.319-.531-1.909-2.872-2.68-4.765-1.568-2.371 1.392-4.746 1.063-6.724-.931-.996-1.003-2.642-2.07-3.659-2.37-1.016-.3-2.075-1.395-2.352-2.434-.295-1.105-1.295-2.074-2.413-2.338-2.202-.52-1.892-2.317.523-3.037 1.672-.499 2.201-3.771.746-4.616-.452-.263-.822-1.273-.822-2.245 0-.972-.731-2.39-1.625-3.15-2.099-1.786-1.426-2.722 1.957-2.722 1.573 0 3.27-.591 4.062-1.414 1.441-1.496 1.862-5.934.632-6.649-.401-.233-.973-1.645-1.27-3.138l-.542-2.714h-5.554c-3.223 0-5.967-.39-6.54-.928-.542-.51-.986-2.579-.986-4.596 0-3.232-.267-3.789-2.242-4.679-1.301-.586-2.549-1.984-2.974-3.328-1.391-4.403-1.714-4.645-5.98-4.49-2.208.08-5.587.378-7.508.661-3.039.448-4.028.192-7.605-1.966-4.42-2.667-5.073-4.101-2.468-5.412 1.743-.877 2.207-3.801.812-5.113-1.115-1.048.624-5.767 2.618-7.107 1.608-1.08 2.073-5.139.681-5.947-.452-.263-.822-1.327-.822-2.365 0-1.349.453-1.887 1.587-1.887 1.01 0 1.683-.621 1.85-1.708.166-1.076 1.023-1.878 2.318-2.168 1.849-.414 2.056-.844 2.056-4.277 0-3.793.022-3.824 3.473-4.952 2.823-.923 3.988-.96 6.224-.2 1.514.515 4.391.927 6.394.916 3.436-.019 3.726-.193 5.148-3.092 1.442-2.942 1.67-3.073 5.354-3.073 3.203 0 3.985-.292 4.66-1.739.548-1.175 1.652-1.816 3.398-1.976 1.422-.13 3.237-.912 4.033-1.739.997-1.037 2.524-1.503 4.918-1.503 1.981 0 3.884-.467 4.432-1.088.527-.597 2.747-1.206 4.932-1.352l3.973-.266.42 6.94c.334 5.53.713 7.102 1.863 7.731 2.904 1.59 6.141 5.03 6.141 6.526 0 3.909 4.949 8.566 9.103 8.566 1.122 0 2.467.684 3.039 1.546.708 1.067 1.917 1.546 3.898 1.546 2.447 0 2.87.262 2.87 1.778 0 .978.433 2.185.962 2.683.735.69.713 1.615-.093 3.909-1.461 4.163-.689 5.698 4.486 8.929 3.766 2.351 5.198 2.801 8.92 2.801 2.938 0 4.779.391 5.458 1.159.563.638 1.81 1.201 2.772 1.251 1.308.069 1.158.215-.597.58-1.679.35-2.893 1.448-4.262 3.858-2.106 3.708-4.887 6.021-5.719 4.756-.282-.43-1.821-.781-3.419-.781-2.215 0-3.009.368-3.336 1.546-.305 1.095-1.122 1.546-2.801 1.546-1.304 0-2.371.348-2.371.773 0 .429-2.176.773-4.884.773-2.687 0-5.084.303-5.327.673-.244.371-1.56.884-2.926 1.141-2.639.496-3.344 2.48-1.498 4.216.768.721.768 1.134 0 1.855-.542.511-.986 2.694-.986 4.853 0 4.632-1.694 7.362-4.569 7.362-2.992 0-2.853 4.334.214 6.633 1.76 1.319 2.246 2.371 2.337 5.054.062 1.863.215 3.735.338 4.16.355 1.221-.019 10.679-.48 12.176-.314 1.019-1.293 1.353-3.961 1.353-2.147 0-3.947.457-4.567 1.16-1.289 1.459-2 1.46-3.286.003z'
    />
    <path
      fill='url(#map)'
      d='M134.261 184.727c-.591-2.02-1.266-5.328-1.5-7.352-.42-3.639-.467-3.69-4.229-4.581-2.093-.495-3.352-1.042-2.798-1.216 1.7-.533 1.139-4.439-.896-6.236-2.409-2.128-3.665-2.116-6.127.058-3.239 2.862-8.7 2.42-14.446-1.167-3.14-1.961-4.656-3.423-4.656-4.492 0-.871-1.821-3.394-4.047-5.607s-4.31-5.008-4.63-6.211c-.556-2.081-.755-2.164-4.078-1.695-3.202.452-3.534.338-3.988-1.363-.273-1.021-2.167-3.304-4.21-5.075-4.063-3.522-4.25-4.276-2.775-11.186.832-3.893.772-4.566-.524-5.913-1.212-1.258-1.281-1.726-.405-2.719.855-.968.861-1.827.034-4.459-.564-1.794-1.343-3.84-1.73-4.548-.46-.839-.32-1.588.405-2.153.61-.477 1.354-2.09 1.653-3.586.298-1.495 1.09-2.916 1.76-3.158 1.722-.621 3.624-4.386 3.624-7.171 0-2.108.264-2.358 2.483-2.358 3.179 0 8.864-3.359 9.862-5.826.423-1.048 1.241-1.905 1.818-1.905 1.672-.001 7.214-5.82 7.214-7.575 0-.88-.689-1.803-1.536-2.055-.845-.252-2.197-1.146-3.005-1.985-1.424-1.48-1.408-1.527.508-1.53 3.444-.004 7.18-2.714 7.472-5.418.256-2.374.289-2.39 1.905-.989 4.538 3.939 7.048 5.053 10.284 4.567 3.559-.536 5.223.708 2.997 2.24-2.143 1.473-1.742 5.516.696 7.019 2.582 1.59 2.625 3.197.113 4.273-1.697.727-2.005 1.528-2.433 6.32-.528 5.93-.141 6.866 3.595 8.682 3.093 1.504 3.576 3.852 1.105 5.374-2.878 1.773-2.813 6.36.1 7.047 1.138.269 2.803.308 3.7.087 1.297-.319 1.631-.015 1.631 1.484 0 2.391 2.079 3.179 4.024 1.524 1.668-1.42 2.702-.749 3.736 2.421.376 1.155 1.595 1.984 3.704 2.518 1.729.437 3.602 1.315 4.162 1.949 1.374 1.557 6.573 1.552 6.573-.005 0-1.646 1.447-1.436 2.657.386.628.945 1.918 1.547 3.316 1.547 1.616 0 2.497.511 2.997 1.739 1.372 3.372 3.809 4.699 7.59 4.131 2.252-.339 3.648-.212 4.028.365.779 1.186-.926 5.507-2.652 6.722-.762.536-1.502 1.926-1.644 3.088-.204 1.662-.781 2.198-2.696 2.507-3.021.487-4.548 4.273-3.139 7.782.78 1.943.652 2.338-1.11 3.424-1.333.821-2.884 1.069-4.694.75-4.169-.736-4.903.731-5.43 10.855-.251 4.818-.698 8.987-.993 9.263-.295.277-1.325.044-2.289-.517-1.582-.92-1.982-.774-4.094 1.492-1.288 1.382-2.755 2.513-3.26 2.513-1.246 0-1.16 1.21.175 2.465.602.566 1.349 1.982 1.66 3.147.311 1.165.928 2.119 1.372 2.119.443 0 .806.347.806.773 0 .425-.396.773-.881.773-.484 0-1.436.521-2.114 1.159-.678.638-2.232 1.16-3.454 1.16-1.95 0-2.352-.447-3.296-3.672z'
    />
    <path
      fill='url(#map)'
      d='M52.284 170.546c-.306-.466-1.991-.717-3.748-.56-1.987.178-3.193-.04-3.193-.578 0-.475-1.436-1.269-3.191-1.763-4.257-1.199-5.296-2.454-4.226-5.1 1.48-3.661 1-6.181-1.627-8.548-1.356-1.222-2.456-2.591-2.443-3.043.012-.452 1.148-2.213 2.523-3.914l2.5-3.092-.565-8.118c-.375-5.371-1.082-9.132-2.09-11.118-1.496-2.944-1.494-3.044.097-5.145 1.825-2.409 2.148-6.898.602-8.352-.813-.765-.771-1.108.205-1.689.675-.401 1.847-.734 2.606-.741 1.802-.015 4.787-3.619 4.787-5.779 0-.932.924-2.51 2.053-3.507 1.86-1.643 2.249-1.714 4.156-.754 1.887.95 2.487.864 5.809-.834 2.038-1.041 4.294-2.502 5.015-3.246.72-.744 1.947-1.353 2.726-1.353.78 0 1.877-.522 2.44-1.16.563-.637 2.042-1.16 3.287-1.16 1.244 0 3.419-.217 4.832-.482 2.163-.407 2.57-.835 2.57-2.706 0-1.428.426-2.222 1.194-2.222.946 0 1.108.845.778 4.058-.784 7.642-1.206 9.012-3.24 10.517-1.116.825-2.257 2.572-2.535 3.881-.279 1.31-1.017 2.78-1.641 3.267-1.387 1.082-1.48 3.926-.17 5.159.56.525.932 3.011.885 5.906-.052 3.218.297 5.294.979 5.826.769.6.874 1.725.384 4.105-.37 1.802-.69 4.749-.71 6.547-.032 2.905.378 3.629 3.678 6.488 2.043 1.771 3.94 4.07 4.219 5.111.453 1.699.866 1.865 4.054 1.627 4.287-.321 4.965.913 3.035 5.531-1.356 3.248-2.689 3.442-2.689.392 0-1.012-.383-2.064-.852-2.336-1.615-.938-7.636.584-9.595 2.425-1.078 1.014-2.266 1.844-2.64 1.844-.374 0-.922 1.427-1.219 3.17-.378 2.223-1.013 3.287-2.125 3.561-.887.218-1.993 1.546-2.508 3.014-1.107 3.153-3.4 3.487-4.755.691-.515-1.063-1.425-1.932-2.023-1.932-1.497 0-3.06 1.596-3.06 3.127 0 1.198-2.412 3.83-3.51 3.83-.277 0-.753-.38-1.059-.845z'
    />
    <path
      fill='url(#map)'
      d='M173.606 127.229c0-.585-1.414-.744-4.301-.483-4.556.412-5.554-.123-7.218-3.864-.557-1.254-1.46-1.739-3.231-1.739-1.617 0-2.76-.53-3.338-1.546-1.096-1.926-6.578-2.248-6.578-.387 0 1.609-1.932 1.45-3.614-.298-.772-.801-2.413-1.647-3.648-1.879-1.543-.291-2.684-1.286-3.645-3.181-1.472-2.903-4.198-3.709-6.194-1.831-.768.721-.987.441-.987-1.261 0-2.033-.19-2.161-2.672-1.804-5.073.729-6.378-1.242-2.556-3.86 3.156-2.162 2.262-6.185-1.947-8.763-2.956-1.81-3.032-1.976-2.797-6.052.194-3.353.64-4.485 2.23-5.661 2.697-1.995 2.665-5.4-.069-7.084-2.306-1.421-2.679-3.16-.822-3.83.679-.244 1.233-.912 1.233-1.483 0-1.329 3.044-7.28 4.011-7.842.403-.234 1.903-.043 3.332.425 2.171.712 2.863.627 4.206-.515.883-.752 1.606-1.798 1.606-2.325 0-1.078 1.812-1.895 4.204-1.895.882 0 1.816-.522 2.077-1.16.693-1.699 5.432-1.497 6.613.281.719 1.083 2.404 1.574 6.781 1.98 4.969.46 6.155.869 8.079 2.784 1.844 1.835 3.231 2.355 7.6 2.852l5.344.607.257 2.92c.275 3.133 2.2 4.693 10.434 8.455 3.235 1.477 3.697 1.997 3.697 4.157 0 1.628.491 2.656 1.439 3.016 1.293.491 1.259.612-.333 1.19-2.152.782-3.356 4.928-1.908 6.569 1.002 1.134.872 1.232-3.103 2.346-.565.159-1.028.995-1.028 1.859 0 1.018-.54 1.57-1.536 1.57-2.244 0-3.05 5.182-1.118 7.189 1.335 1.387 1.313 1.534-.436 2.865-1.013.772-1.843 1.782-1.843 2.246 0 .463-.37.842-.822.842-1.126 0-1.043 6.44.097 7.513.677.636.461 1.133-.822 1.886-.958.563-1.741 1.796-1.741 2.742s-.716 2.08-1.591 2.52c-2.072 1.043-3.342 1.016-3.342-.071z'
    />
    <path
      fill='url(#map)'
      d='M298.576 125.396c-.678-.768-2.519-1.16-5.457-1.16-3.716 0-5.155-.45-8.886-2.779-2.448-1.528-4.661-3.293-4.917-3.921-.536-1.312.844-4.123 2.023-4.123 1.276 0 .884-1.78-.851-3.865-.884-1.063-1.616-2.715-1.626-3.672-.018-1.757-.412-1.954-4.129-2.065-1.483-.044-1.988-.437-1.814-1.414.194-1.087-.361-1.352-2.827-1.352-5.158 0-10.158-4.217-10.158-8.567 0-1.495-3.237-4.935-6.142-6.525-1.152-.631-1.529-2.212-1.87-7.84l-.428-7.047 3.393-.54c1.867-.296 3.576-.816 3.799-1.155.223-.34 2.121-.859 4.218-1.154 3.91-.552 4.797-1.183 10.166-7.24 1.572-1.773 3.261-3.224 3.752-3.224 1.558 0 5.557-4.51 6.675-7.527 1.521-4.106 1.373-5.27-.84-6.634-1.428-.88-2.055-2.138-2.368-4.75-.291-2.42-1.039-4.052-2.347-5.119l-1.921-1.566 3.781-3.243c2.079-1.784 3.998-3.852 4.263-4.596.687-1.926 3.215-1.673 5.801.58 1.219 1.063 2.584 1.933 3.032 1.933.447 0 1.608.695 2.579 1.546.971.85 2.378 1.546 3.127 1.546 3.183 0 6.69 7.193 5.97 12.243-.287 2.013-.135 3.218.408 3.218 1.454 0 2.728 4.998 2.146 8.42-.404 2.374-.214 3.564.725 4.549.7.733 1.54 2.686 1.866 4.34.327 1.654 1.464 4.437 2.526 6.184 1.063 1.748 1.937 3.887 1.943 4.754.005.866.761 2.954 1.68 4.638 1.978 3.625 4.554 12.84 5.363 19.18.736 5.775-.614 9.935-3.621 11.159-4.181 1.702-7.711 3.941-9.018 5.72-.723.985-1.793 2.251-2.377 2.813-.584.562-1.061 1.692-1.061 2.512 0 .82-.302 1.491-.67 1.491-.369 0-1.288 1.218-2.042 2.706-1.507 2.971-2.321 3.296-3.866 1.546z'
    />
    <path
      fill='url(#map)'
      d='M34.656 108.314c0-.423-2.578-3.189-5.729-6.146-3.15-2.957-5.74-5.863-5.755-6.456-.015-.594 1.638-2.753 3.673-4.799 2.035-2.045 3.7-4.104 3.7-4.574 0-.47.984-2.745 2.187-5.056 1.94-3.725 2.085-4.53 1.274-7.102-.503-1.596-1.148-4.466-1.433-6.38-.285-1.913-.785-5.218-1.109-7.344-.325-2.126-1.031-4.62-1.57-5.542-.607-1.038-.784-3.027-.464-5.218.486-3.335.666-3.544 3.076-3.575 1.408-.02 4.04-.566 5.85-1.216a170.07 170.07 0 016.988-2.296c2.035-.614 4.625-1.746 5.755-2.517 2.329-1.587 6.72-2.824 15.514-4.37 3.763-.663 6.742-1.67 7.863-2.661 1.28-1.13 2.9-1.595 5.558-1.595 6.767 0 12.59-3.557 16.198-9.897.998-1.754 4.906-4.018 6.935-4.018 1.588 0 2.836 3.34 3.229 8.634.295 3.984.15 4.458-1.587 5.202-2.373 1.016-2.553 4.116-.359 6.178 1.222 1.15 1.464 2.206 1.136 4.949-.358 2.986-.168 3.614 1.324 4.364 1.957.986 2.448 4.688.621 4.688-.791 0-1.251 1.528-1.564 5.193-.244 2.856-.849 5.32-1.346 5.476-.496.155-.902 1.272-.902 2.481 0 2.838-3.371 5.403-7.1 5.403-3.944 0-3.725 2.43.477 5.292l3.243 2.209-3.072 2.82c-1.69 1.552-3.529 2.822-4.086 2.822-.557 0-1.36.855-1.782 1.9-.933 2.307-6.728 6.068-8.777 5.696-1.198-.216-1.432-.892-1.228-3.545l.251-3.278h-2.94c-2.69 0-2.94.188-2.94 2.222 0 1.87-.407 2.3-2.57 2.706-1.413.266-3.587.483-4.832.483-1.245 0-2.724.522-3.287 1.16-.563.637-1.697 1.16-2.52 1.16-.824 0-1.987.608-2.586 1.352-2.021 2.513-5.98 3.914-9.89 3.5-3.358-.357-3.82-.192-5.436 1.943-.972 1.283-1.767 2.841-1.767 3.462 0 1.725-3.228 5.203-4.828 5.203-.781 0-1.864.418-2.407.928-.543.51-.986.582-.986.159z'
    />
    <path
      fill='url(#map)'
      d='M204.055 86.27c-1.115-.418-3.335-.657-4.933-.53-3.507.277-5.782-1.531-5.787-4.602-.004-1.888-.786-2.501-6.989-5.48-6.98-3.353-6.985-3.356-6.985-6.402 0-3.003-.155-3.172-3.841-4.186-1.716-.472-.182-3.298 2.319-4.273 1.651-.642 2.584-1.657 2.903-3.155.3-1.411.984-2.208 1.896-2.208 2.013 0 7.412-4.997 7.412-6.86 0-1.8-.95-2.479-4.397-3.142-1.83-.352-2.649-1.053-3.105-2.656-.341-1.198-1.192-2.58-1.89-3.07-1.313-.923-.963-4.372.444-4.372.399 0 .726-1.392.726-3.092 0-2.77.211-3.092 2.022-3.092 3.072 0 7.801-2.493 7.824-4.125.018-1.265.575-1.377 5.159-1.027 2.826.215 7.358.732 10.071 1.148 16.021 2.455 20.12 2.802 32.477 2.744 7.461-.034 17.08-.462 21.376-.951 4.296-.489 10.586-1.08 13.977-1.314l6.167-.426-3.084 2.555c-3.628 3.007-3.911 5.184-1.027 7.896 1.511 1.421 2.055 2.756 2.055 5.043 0 2.418.433 3.376 1.95 4.31 1.799 1.109 1.874 1.409.972 3.877-1.119 3.06-3.819 5.993-7.471 8.116-1.387.806-3.722 3.036-5.188 4.956-2.053 2.687-3.461 3.684-6.125 4.334-1.902.465-6.049 1.734-9.214 2.82-3.166 1.087-7.496 2.14-9.624 2.341-2.128.201-4.3.855-4.828 1.453-.548.62-2.451 1.087-4.432 1.087-2.427 0-3.919.465-4.96 1.546-.818.85-2.195 1.546-3.059 1.546-2.279 0-4.751 1.422-4.751 2.733 0 .821-.983 1.133-3.573 1.133-3.779 0-5.62 1.228-6.663 4.445-.435 1.344-1.157 1.728-3.18 1.69-1.439-.027-3.529-.391-4.644-.81z'
    />
    <path
      fill='url(#map)'
      d='M113.176 66.829c-5.468-3.778-5.886-4.478-5.526-9.27.237-3.157.669-4.445 1.491-4.445.822 0 1.157-1 1.157-3.451 0-2.648-.379-3.642-1.626-4.27-1.373-.691-1.549-1.344-1.132-4.205.414-2.839.211-3.615-1.252-4.793-2.256-1.816-2.199-2.446.318-3.524 2.024-.867 2.054-1.005 1.549-7.135-.284-3.437-1.011-6.997-1.616-7.91-1.017-1.532-.899-1.733 1.535-2.615 6.231-2.26 8.76-3.512 8.78-4.347.012-.49 1.779-1.08 3.927-1.312 7.788-.837 2.08-1.043 5.112-2.93 3.02-1.879 15.07-2.863 25.165-2.316 9.619.522 17.278 9.726 16.817 11.09-.235.696.041 3.675-2.131 2.389-2.173-1.287-9.426-9.98-10.781-9.048-2.463 1.692 4.217 7.432 4.217 9.044 0 2.324.236 6.902 2.354 8.708 2.522 2.15 4.597.673 10.24.434 8.27-.351 10.302 1.73 7.181 7.356-1.692 3.051-1.55 5.911.349 7.026.873.513 1.705 1.887 1.85 3.055.221 1.782.782 2.223 3.503 2.751 1.782.346 3.411.79 3.62.987.783.736-5.285 5.773-6.963 5.781-1.261.006-1.878.623-2.217 2.217-.322 1.513-1.253 2.513-2.96 3.178-1.862.725-2.622 1.63-3.012 3.583-.47 2.356-.735 2.566-2.692 2.134-1.194-.264-3.147-1.333-4.34-2.375-2.242-1.958-6.631-3.267-11.064-3.299-1.481-.01-3.167-.665-4.033-1.564-1.873-1.946-9.001-2.229-9.752-.387-.261.638-1.318 1.165-2.349 1.172-2.221.014-3.197.606-4.442 2.694-.725 1.216-1.777 1.546-4.933 1.546-3.663 0-4.117.205-5.229 2.37-.962 1.872-1.738 2.367-3.7 2.36-1.365-.004-3.037.224-3.715.508-.71.297-2.281-.207-3.7-1.188z'
    />
    <defs>
      <linearGradient
        id='map'
        x1='315.128'
        x2='235.324'
        y1='204.635'
        y2='211.321'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#4A4A57'></stop>
        <stop
          offset='1'
          stopColor='#383842'
        ></stop>
      </linearGradient>
    </defs>
  </svg>
);