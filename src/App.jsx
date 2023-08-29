import Form from "./components/form";

const App=()=>{

  const tab = [
    {
      title: "Tab 1",
      content: <div>This is the content for Tab 1</div>,
    },
    {
      title: "Tab 2",
      content: <div>This is the content for Tab 2</div>,
    },
    {
      title:"Tab 3",
      content: <div>This is the content for Tab 3</div>
    }
  ];

  return(
    
    <>
      <Form tab={tab} />
  </>
  )
}

export default App