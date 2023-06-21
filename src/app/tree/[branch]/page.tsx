export default function BranchPage({ params }: { params: { branch: string } }) {
  return <div>Assunto: {params.branch}</div>;
}
