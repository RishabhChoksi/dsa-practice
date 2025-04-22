import { useMemo, useState } from 'react'
import { RootStateType } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { IndividualProblemState } from '../../store/app-slice';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { flexRender, useReactTable } from '@tanstack/react-table';
import { getSortedRowModel, getFilteredRowModel, getCoreRowModel, ColumnDef } from '@tanstack/table-core';
import Intro from './Intro';

const StyledProblemsList = styled('section')`
font-family: poppins;
  box-sizing: border-box;
  margin:0;
  flex: 3;
  color: #e1e1e1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  & * {
    box-sizing: border-box;
  }
`;

const StyledTableContainer = styled('section')`
  -ms-overflow-style: none; 
  scrollbar-width: none;
  justify-content: center;
  align-items: center;
  width: 100%; 
`;

const StyledProblemHeader = styled('h3')`
font-size: 1.5rem;
margin:0;
padding: 1rem 0;
`;


const StyledTable = styled('table')`
  width: 90%;
  max-width: 100%;
  text-align: left;
  background: linear-gradient(to right,#222222,#2f3136);
  border-collapse: collapse;
  margin-bottom: 2rem;

  & thead tr:first-child {
    background: #222222;
    position: sticky;
    top: 0;
  }

  & td {
   padding: 0.25rem 0.3rem;  
  }

  & th {
    font-size: 0.8rem;
    color: #e1e1e1;
    position: sticky;
    top: 0;
    
  }

  & tr:hover {
    font-size:900;
    background-color:rgb(48, 48, 52);
    cursor:pointer;
  }
  `



const ProblemsList = () => {
  const dispatch = useDispatch();
  const problemsList: IndividualProblemState[] = useSelector((state: RootStateType) => state.app);
  const navigate = useNavigate();

  const [starredItems, setStarredItems] = useState<number[]>(() =>
    JSON.parse(localStorage.getItem('starred') || '[]')
  );
  const [visitedItems, setVisitedItems] = useState<number[]>(() =>
    JSON.parse(localStorage.getItem('visited') || '[]')
  );

  const handleStarClick = (id: number) => {
    const updatedStarredItems = starredItems.includes(id)
      ? starredItems.filter((item) => item !== id) // Remove if already starred
      : [...starredItems, id]; // Add if not starred

    setStarredItems(updatedStarredItems); // Update state
    localStorage.setItem('starred', JSON.stringify(updatedStarredItems)); // Update localStorage
  };

  const handleVisitedClick = (id: number) => {
    if (visitedItems.includes(id))
      return;
    const updatedVisitedItems = [...visitedItems, id]; // Add if not visited

    setVisitedItems(updatedVisitedItems); // Update state
    localStorage.setItem('visited', JSON.stringify(updatedVisitedItems)); // Update localStorage
  };


  const columns = useMemo<ColumnDef<IndividualProblemState>[]>(
    () => [
      {
        accessorKey: 'problem.id',
        header: 'ID',
      },

      {
        accessorKey: 'question.heading',
        header: 'Title',
      },
      {
        accessorKey: 'problem.difficultyLevel',
        header: 'Difficulty',
        cell: ({ row }) => {
          const difficulty = row.original.problem.difficultyLevel;
          let color = '';
          if (difficulty === 'Hard') color = '#ef4444'; // Red
          else if (difficulty === 'Medium') color = '#facc15'; // Yellow
          else if (difficulty === 'Easy') color = '#22c55e'; // Green

          return (
            <div
              dangerouslySetInnerHTML={{
                __html: `<span style="color: ${color}; font-weight: bold;">${difficulty}</span>`,
              }}
            />
          );
        },
      },
      {
        accessorKey: 'problem.topic',
        header: 'Topic',
      },
      {
        accessorKey: 'problem.visited',
        header: 'Done',
        cell: ({ row }) => {
          const visited = visitedItems.includes(row.original.problem.id) || false;
          return (
            <span style={{ color: visited ? '#00ad5f' : '#ff0000', fontWeight: 'bold' }}>
              {visited ? '✔' : '✘'}
            </span>
          );
        },
      },
      {
        accessorKey: 'problem.starred',
        header: 'Star',
        cell: ({ row }) => {
          const starred = starredItems.includes(row.original.problem.id) || false;
          return (
            <span
              style={{
                color: starred ? '#FFD700' : '#808080', // Gold for starred, gray for not starred
                fontWeight: 'bold',
                cursor: 'pointer', // Add pointer cursor to indicate it's clickable
              }}
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the row's onClick
                handleStarClick(row.original.problem.id);
              }}
            >
              {starred ? '★' : '☆'}
            </span>
          );
        },
      },
    ],
    // eslint-disable-next-line
    [problemsList, dispatch, starredItems, visitedItems] // Add starredItems and visitedItems to dependencies
  );

  // eslint-disable-next-line
  const data = useMemo(() => problemsList, [problemsList, starredItems, visitedItems]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });



  return (
    <>
      <Intro />
      <StyledProblemsList>
        <StyledProblemHeader>Problems List</StyledProblemHeader>
        <StyledTableContainer>
          <StyledTable>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                      {header.column.getIsSorted() === 'asc' ? ' 🔼' : header.column.getIsSorted() === 'desc' ? ' 🔽' : ''}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  onClick={() => {
                    handleVisitedClick(row.original.problem.id);
                    navigate(`/problems/${row.original.problem.id}`)
                  }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </StyledTableContainer>
      </StyledProblemsList>
    </>
  )
}

export default ProblemsList