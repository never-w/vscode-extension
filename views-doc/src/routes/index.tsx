import React from 'react'
import NoMatch from '@/pages/no-match'
import { RouteObject } from 'react-router-dom'
import Layout from '@/layout'
import SideContent from '@/pages/side-content'
import DocContent from '@/pages/doc-content'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <SideContent />,
      },
      {
        path: '/docs',
        element: <SideContent />,
        children: [
          {
            path: '/docs/:id',
            element: <DocContent />,
          },
        ],
      },
      {
        path: '/home',
        element: <p>home page</p>,
      },
    ],
  },
  {
    path: '*',
    element: <NoMatch />,
  },
]

export default routes
