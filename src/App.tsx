import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Index() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const data = [
    {
      id: "1",
      titulo: "Maquiagem",
      descricao: "Maquiagem em tons quentes.",
      img: "/1.png",
    },
    {
      id: "11",
      titulo: "Sobrancelhas",
      descricao: "Design personalizado.",
      img: "/11.png",
    },
    {
      id: "5",
      titulo: "Maquiagem",
      descricao: "Maquiagem marcante.",
      img: "/5.png",
    },
    {
      id: "3",
      titulo: "Maquiagem",
      descricao: "Maquiagem social.",
      img: "/3.png",
    },
    {
      id: "4",
      titulo: "Maquiagem",
      descricao: "Maquiagem glow.",
      img: "/4.png",
    },
    {
      id: "10",
      titulo: "Sobrancelhas",
      descricao: "Sobrancelhas em destaque",
      img: "/10.png",
    },
    {
      id: "14",
      titulo: "Sobrancelhas",
      descricao: "Design de sobrancelhas.",
      img: "/14.png",
    },
    {
      id: "6",
      titulo: "Maquiagem",
      descricao: "Maquiagem profissional",
      img: "/6.png",
    },
    {
      id: "7",
      titulo: "Maquiagem",
      descricao: "Maquiagem personalizada",
      img: "/7.png",
    },
    {
      id: "2",
      titulo: "Sobrancelhas",
      descricao: "Design de sobrancelhas simétrico.",
      img: "/2.png",
    },
    {
      id: "8",
      titulo: "Maquiagem",
      descricao: "Maquiagem encantadora.",
      img: "/8.png",
    },
    {
      id: "9",
      titulo: "Maquiagem",
      descricao: "Maquiagem com técnica e propósito",
      img: "/9.png",
    },
    {
      id: "12",
      titulo: "Maquiagem",
      descricao: "Maquiagem delicada",
      img: "/12.png",
    },
    {
      id: "13",
      titulo: "Sobrancelhas",
      descricao: "Design de sobrancelhas.",
      img: "/13.png",
    },
  ];

  const filteredData = data.filter((item) =>
    item.titulo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      {/* HEADER */}
      <div style={styles.header}>
        <img src="/logo.png" alt="Logo" style={{ width: 220, height: 30 }} />
        <button style={styles.btnHeader} onClick={() => setMenuOpen(!menuOpen)}>
          <GiHamburgerMenu size={30} color="#be964a" />
        </button>
      </div>

      {/* MENU LATERAL */}
      {menuOpen && (
        <div style={styles.menu}>
          <button onClick={() => setSearch("")} style={styles.menuText}>
            Todos
          </button>
          <button
            onClick={() => setSearch("Sobrancelha")}
            style={styles.menuText}
          >
            Sobrancelhas
          </button>
          <button
            onClick={() => setSearch("Maquiagem")}
            style={styles.menuText}
          >
            Maquiagens
          </button>
        </div>
      )}

      {/* SEARCH */}
      <div style={styles.searchInputContainer}>
        <input
          placeholder="Faça sua busca..."
          style={styles.searchInput}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button style={styles.btnSearch}>
          <IoSearch size={30} color="white" />
        </button>
      </div>

      {/* CATEGORIAS */}
      <div style={styles.speciality}>
        <button onClick={() => setSearch("")} style={styles.specialityText}>
          Todos
        </button>
        <button
          onClick={() => setSearch("Sobrancelha")}
          style={styles.specialityText}
        >
          Sobrancelhas
        </button>
        <button
          onClick={() => setSearch("Maquiagem")}
          style={styles.specialityText}
        >
          Maquiagens
        </button>
      </div>

      {/* LISTA DE CARDS */}
      <div style={styles.cardsContainer}>
        {filteredData.map((item) => (
          <div key={item.id} style={styles.cardItem}>
            <img src={item.img} alt={item.titulo} style={styles.image} />
            <div>
              <h3 style={styles.cardItemTitulo}>{item.titulo}</h3>
              <p style={styles.cardItemParagrafo}>{item.descricao}</p>
            </div>
            <button
              style={styles.cardbtn}
              onClick={() => setSelectedImage(item.img)}
            >
              Vizualizar
            </button>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div style={styles.modal} onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Detalhe" style={styles.modalImage} />
          <button style={styles.modalClose}>X</button>
        </div>
      )}

      <footer style={styles.footer}>
        <p>© 2025 Revitalize. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: { width: "100%", backgroundColor: "white", paddingBottom: 50 },
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#fbfbeb",
    alignItems: "center",
  },
  btnHeader: { background: "#fbfbeb", border: "none", cursor: "pointer" },
  searchInputContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: 20,
  },
  searchInput: {
    padding: 9,
    fontSize: 16,
    borderRadius: 10,
    border: "1px solid #be964a",
    width: "300px",
    backgroundColor: "white",
    color: "black",
  },
  btnSearch: {
    backgroundColor: "#be964a",
    border: "none",
    padding: "6px 10px",
    marginLeft: 5,
    borderRadius: 7,
    cursor: "pointer",
  },
  speciality: {
    display: "flex",
    justifyContent: "center",
    gap: 20,
    padding: 20,
  },
  specialityText: {
    padding: 10,
    borderRadius: 30,
    backgroundColor: "#be954ae7",
    color: "white",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
  },
  menu: {
    display: "flex",
    gap: 10,
    flexDirection: "column",
    backgroundColor: "#fbfbeb",
    padding: 20,
  },
  menuText: {
    padding: 8,
    backgroundColor: "#be954ae7",
    color: "white",
    borderRadius: 8,
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },
  cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  cardItem: {
    width: "45%",
    background: "#fff",
    margin: 10,
    padding: 10,
    borderRadius: 20,
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  image: { width: "100%", height: 160, borderRadius: 20, objectFit: "cover" },
  cardItemTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000c5",
    margin: "5px 0",
  },
  cardItemParagrafo: { fontSize: 12, color: "#000" },
  cardbtn: {
    width: "100%",
    padding: "10px 0",
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: "#be954ae7",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
  },
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalImage: {
    width: "80%",
    height: "50%",
    objectFit: "contain",
    borderRadius: 15,
  },
  modalClose: {
    position: "absolute",
    top: 40,
    right: 20,
    padding: 10,
    backgroundColor: "#be964a",
    border: "none",
    borderRadius: 20,
    cursor: "pointer",
    fontWeight: "bold",
  },
  footer: {
    width: "100%",
    padding: "20px",
    backgroundColor: "#fbfbeb",
    textAlign: "center",
    marginTop: "40px",
    fontSize: "14px",
    color: "#333",
    borderTop: "1px solid #ccc",
  },
};
