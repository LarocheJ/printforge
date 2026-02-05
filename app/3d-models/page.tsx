import { getAllModels } from "@/app/lib/models"

export default async function Models() {
	const models = await getAllModels()

	return (
		<>
			<h1>3D Models</h1>
			<ul>
				{models.map((model) => (
					<li key={model.id}>
						<h2>{model.name}</h2>
						<p>{model.description}</p>
					</li>
				))}
			</ul>
		</>
	)
}