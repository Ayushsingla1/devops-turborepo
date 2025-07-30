import prisma from "@repo/db/client";

const App = async() => {

  const res = await prisma.user.findFirst({});

  return <div>
    <span>{res?.name}</span>
    <span>{res?.email}</span>
  </div>
}

export default App;