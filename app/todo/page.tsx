'use client';

import { useMutation, useQuery } from "react-query";
import { createTodo, getTodos } from "../actions/todo-actions";
import { useState } from "react";

export default function TodosPage() {
  const [todoInput, setTodoInput] = useState("");

  const todosQuery = useQuery({
    queryKey: ['todos'],
    // 어떤 키로 관리 할거냐,
    queryFn : () => getTodos()
  })

  const createTodoMutation = useMutation({
    mutationFn: async() => {
      if (todoInput === '') throw new Error('TODO를 입력해주세요');
      return createTodo(todoInput)
    },
    onSuccess: (TODOS) => {
      console.log('성공');
      console.log(TODOS);
      todosQuery.refetch();
    },
    onError: (error: any) => {
      alert(error.message);
    }
  })

  return (
    <div>
      <h1>TODOS</h1>

      {/* TODOS를 생성하는 부분 */}
      <input type="text" value={todoInput} onChange={(e) => setTodoInput(e.target.value)}/>
      <button onClick={() => createTodoMutation.mutate()}>
        {createTodoMutation.isLoading ? "...생성중" : "생성"}
      </button>

      {/* TODOS를 보여주는 부분 */}
      {todosQuery.isLoading && <p>로딩중</p>}
      {todosQuery.data && todosQuery.data.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
    </div>
  )
}