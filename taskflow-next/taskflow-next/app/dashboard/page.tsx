import AddProjectForm from "./AddProjectForm";
import { deleteProject, renameProject } from "../actions/projects";

interface Project {
  id: string;
  name: string;
  color: string;
}

export default async function DashboardPage() {

  const res = await fetch(
    "http://localhost:3000/api/projects",
    {
      cache: "no-store",
    }
  );

  const projects: Project[] = await res.json();

  return (

    <div style={{ padding: "2rem" }}>

      <h1>Dashboard</h1>

      {/* Ajout du formulaire */}
      <AddProjectForm />

      <p>{projects.length} projets</p>

      <ul>

  {projects.map((p) => (

    <li
      key={p.id}
      style={{
        marginBottom: 8,
        display: "flex",
        alignItems: "center",
        gap: 8
      }}
    >

      {/* Couleur */}
      <span
        style={{
          display: "inline-block",
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: p.color,
        }}
      />

      {/* Nom */}
      <a href={`/projects/${p.id}`}>
        {p.name}
      </a>

      {/* 🔄 RENAME */}
      <form action={renameProject} style={{ display: "inline" }}>

        <input type="hidden" name="id" value={p.id} />
        <input type="hidden" name="color" value={p.color} />

        <input
          type="text"
          name="newName"
          placeholder="Nouveau nom"
          style={{
            padding: 4,
            borderRadius: 4,
            border: "1px solid #ccc"
          }}
        />

        <button type="submit">✏️</button>

      </form>

      {/* 🗑️ DELETE */}
      <form action={deleteProject} style={{ display: "inline" }}>

        <input
          type="hidden"
          name="id"
          value={p.id}
        />

        <button
          type="submit"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer"
          }}
        >
          🗑️
        </button>

      </form>

    </li>

  ))}

</ul>

    </div>

  );

}