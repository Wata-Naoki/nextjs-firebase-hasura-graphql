import { GraphQLClient } from 'graphql-request';
import React, { useEffect } from 'react'
import { useQuery } from 'react-query';
import  Cookie  from 'universal-cookie'
import { endpoint } from '../api';
import { GET_TASKS } from '../queries/queries';
import { Task } from '../types/types';

const cookie = new Cookie();
let graphQLClient: GraphQLClient


type TasksRes = {
  tasks: Task[]
}
const fetchTasks = async () => {
  const { tasks: data } = await graphQLClient.request<TasksRes>(GET_TASKS)
  return data
}


export const useQueryTasks = () => {
  useEffect(() => {
    graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        Authorization: `Bearer ${cookie.get('token')}`,
      },
    })
  }, [cookie.get('token')])
  return useQuery<Task[], Error>({
    queryKey: 'tasks',
    queryFn: fetchTasks,
    staleTime: 0,
  })/*  */
}
