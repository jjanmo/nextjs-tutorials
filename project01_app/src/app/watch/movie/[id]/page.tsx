interface Props {
  params: {
    id: string;
  };
}

export default async function MovieDetailPage({ params }: Props) {
  console.log(params.id);
  return (
    <div>
      <h1>Movie Detail Page</h1>
    </div>
  );
}
