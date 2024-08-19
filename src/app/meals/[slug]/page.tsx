type MealsDetailProps = {
  params: { type: string };
};

export default ({ params }: MealsDetailProps) => {
  return <h1>/meals/{params.type}</h1>;
};
