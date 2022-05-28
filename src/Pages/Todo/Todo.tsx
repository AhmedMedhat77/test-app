import React from "react";
import { Button, Input, Typography } from "antd";

const Todo = () => {
  const [data, setData] = React.useState([
    {
      id: "1",
      text: "assasasaasdasd",
    },
  ]);

  const [selectedId, setSelectedId] = React.useState<string>("");
  const [editedText, setEdiditedText] = React.useState<string>("");
  const [addtext, setAddtext] = React.useState<string>("");

  const onEditClick = React.useCallback((id: string) => {
    const item = data.find((val) => val.id === id);
    if (!item) {
      return;
    }
    setSelectedId(id);
    setEdiditedText(item.text);
  }, [data]);
  
  const onDeleteClick = React.useCallback((id: string) => {
    setData((old)=> old.filter(item=> item.id !== id));
  }, []);

  const onCancelClick = React.useCallback(() => {
    setSelectedId("");
    setEdiditedText("");
  }, []);

  const onSave = React.useCallback(
    (id: string) => {
      const index = data.findIndex((val) => val.id === id);
      if (index === -1) {
        return;
      }

      data[index] = { ...data[index], text: editedText };
      onCancelClick();
    },
    [data, editedText, onCancelClick]
  );

  const onAddClick = () => {
    if(addtext.trim()===""){
      return;
    }
    const newData: typeof data = [
      ...data,
      { id: `${data.length + 1}`, text: addtext },
    ];
    setData(newData);
    setAddtext("");
  };

  const renderItems = React.useMemo(() => {
    return data.map((item, index) => {
      return (
        <div
          key={item.id}
          className="todo__list__item"
          style={{ display: "flex", margin: "1rem auto" }}
        >
          {selectedId === item.id ? (
            <Input
              style={{ width: "50%" }}
              value={editedText}
              onChange={(e) => {
                const { value } = e.currentTarget;
                setEdiditedText(value);
              }}
              defaultValue={item.text}
            />
          ) : (
            <Typography.Text>{item.text}</Typography.Text>
          )}
          <div
            className="todo__list__item__actions"
            style={{
              marginLeft: "auto",
              width: "30%",
              display: "flex",
              justifyContent: "",
            }}
          >
            <Button
              onClick={() => {
                if (selectedId === item.id) {
                  onSave(item.id);
                  return;
                }
                onEditClick(item.id);
              }}
              type="primary"
            >
              {selectedId === item.id ? "Save" : "Edit"}
            </Button>
            <Button
              type="primary"
              onClick={() => {
                if (selectedId === item.id) {
                  onCancelClick();
                  return;
                }
                onDeleteClick(item.id);
              }}
            >
              {selectedId === item.id ? "Cancel" : "Delete"}
            </Button>
          </div>
        </div>
      );
    });
  }, [data, editedText, onCancelClick, onDeleteClick, onEditClick, onSave, selectedId]);

  return (
    <div className="todo" style={{ maxWidth: "1000px", margin: "3rem auto" }}>
      <div className="todo__actions" style={{ display: "flex" }}>
        <Input
          type={"text"}
          value={addtext}
          onChange={(e) => {
            const { value } = e.currentTarget;
            setAddtext(value);
          }}
          onKeyDown={(e)=>{
            if(e.code==='Enter'){
              onAddClick()
            }
          }}
        />
        <Button type="primary" onClick={onAddClick}>
          Add
        </Button>
      </div>
      <div className="todo__list" style={{ marginTop: "4rem" }}>
        {renderItems}
      </div>
    </div>
  );
};

export default Todo;
