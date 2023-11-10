const addOnItem = (state, todoItem) => {
    const obj = { completed: false, item: todoItem };
    // 위 obj값이 value에 string으로 변경되어 입력됨
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}

const removeOneItem = (state, payload) => {
    // 로컬 스토리지 내용 삭제
    localStorage.removeItem(payload.todoItem.item);
    // 화면에서 삭제(이거 없으면 바로 반영 안됨)
    state.todoItems.splice(payload.index, 1);
}

const toggleOneItem = (state, payload) => {
    // todoItem.completed = !todoItem.completed;
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
    // 해당 아이템을 지웠다가 다시 저장(아이템 갱신)
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

const clearAllItems = (state) => {
    localStorage.clear();
    state.todoItems = [];
}

export { addOnItem, removeOneItem, toggleOneItem, clearAllItems }