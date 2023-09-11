/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useMemo, useState } from "react";
import Avatar from "boring-avatars";
import Select from "react-select";

import { User } from "../../types/user";
import { direction } from "@/app/types/sort";
import { sortBy, sortDirection } from "./functions";


interface ControlledListProps {
  users: User[];
  title: string;
  handleModalOpen: (data: number) => void;
};

interface ItemDisplayProps {
  user: User;
  index: number;
  action: (data: number) => void;
}

type sortField = keyof User;

const sortingFields: {label: string, value: sortField}[] = [
  { label: "name", value: "name" },
  { label: "email", value: "email" },
  { label: "company", value: "company" },
];

const directions: {label: string, value: direction }[] = [
  { label: "ascending", value: "ascending" },
  { label: "descending", value: "descending" },
];


const ControlledList:FC<ControlledListProps> = ({
  users = [], 
  title = "No title", 
  handleModalOpen,
}) => {

const [direction, setDirection] = useState(directions[0]);
const [sort, setSort] = useState(sortingFields[0]);
const [data, setData] = useState(users);


const ItemDisplay:FC<ItemDisplayProps> = ({user, index, action}) => {
  return  (
  <div
    className={"item user-card"}
    key={index}
    onClick={() => action(user.id)}
  >
    <div className={"body"}>
      <Avatar
        size={96}
        name={user.name}
        variant="marble"
        colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
      />
    </div>
    <div className={"info"}>
      <div className={"name"}>{user.name}</div>
      <div className={"company"}>{user.company.name}</div>
    </div>
  </div>
  )
}

useEffect(() => {
  /* this will be called everytime there are 
  changes to the sort order and sort by type */
  const list = sortBy(sort.value, users);
  const ordered = sortDirection(direction.value, list)
  setData(ordered);
},[sort, direction]);

  return (
  <>
    <div className={"list-controller"}>
      <h1>{title}</h1>
      <div className={"controls"}>
        <label className={"control-label"}>
          Sort Field
        </label>
        <Select 
          options={sortingFields}
          value={sort}
          placeholder={"Select Sort Type"}
          onChange={(data: any) => {
          setSort(data)
          }} className={"input"}
        />
        <label className={"control-label"}>
          Sort Direction
        </label>
        <Select 
          options={directions} 
          value={direction}
          placeholder={"Select Sorting Direction"}
          onChange={(data: any) => {
            setDirection(data)
          }} className={"input"}
        />
      </div>
    </div>
    <div className="items">
      {data.map((user, index) => (
          <ItemDisplay 
            key={index} 
            user={user} 
            index={index} 
            action={handleModalOpen} 
          />
        )
      )}
    </div>
  </>
  );
};

export default ControlledList;
