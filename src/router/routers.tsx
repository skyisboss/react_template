import DefaultLayout from "@/layout/default";
import React from "react";
import { RouteObject } from "react-router-dom";
import LazyRoute from "./lazyRoute";

const HomeLazy = React.lazy(() => import("@/views/Home"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        path: "/",
				element: (
					<LazyRoute title="">
						<HomeLazy />
					</LazyRoute>
				)
      },
    ],
  },
];
export default routes;