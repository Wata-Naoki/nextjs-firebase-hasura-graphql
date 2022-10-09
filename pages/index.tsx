import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Auth } from '../components/Auth'
import { Layout } from '../components/Layout'


const Home: NextPage = () => {
  return (
    <Layout title='home'>
      <Auth />

    </Layout>
  )
}

export default Home
