import { Button, Flex, useColorMode } from "@chakra-ui/react"
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
  } from '@chakra-ui/react'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { useState } from "react";
import { SortingState, flexRender, useReactTable, getCoreRowModel, getSortedRowModel, getPaginationRowModel, ColumnDef } from "@tanstack/react-table";

interface DataTableProps<T> {
    data: T[]
    columns: ColumnDef<T, any>[]
}

function DataTable<T> ({ data, columns }: DataTableProps<T>) {
    const [sorting, setSorting] = useState<SortingState>([]);

    const {
      getHeaderGroups,
      getRowModel,
      getCanPreviousPage,
      getPageCount,
      getCanNextPage,
      nextPage,
      previousPage,
      getState,
      setPageSize,
      setPageIndex,
      initialState: {
        pagination: {
          pageIndex,
          pageSize
        }
      }
    } = useReactTable({
      columns,
      data,
      getCoreRowModel: getCoreRowModel(),
      onSortingChange: setSorting,
      getSortedRowModel: getSortedRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      initialState: {
        pagination: {
          pageSize: 5,
          pageIndex: 0
        }
      },
      state: {
        sorting
      }
    });

    const { colorMode } = useColorMode()

    return (
        <Flex w='full'>
            <Table variant='simple'>
                <Thead 
                    bg={ colorMode === 'light'? '#EFF4F6' : '#203A4A' }
                    borderBottom='2px'
                    borderBottomColor={colorMode === 'light'? 'gray.400' : 'white'}>
                        {getHeaderGroups().map((headerGroup, index) => (
                            <Tr 
                                key={headerGroup.id} 
                                h='52px'>
                                    {headerGroup.headers.map((header) => {
                                        const meta = header.column.columnDef.meta;
                                        return (
                                            <Th
                                                id={header.id}
                                                key={header.id}
                                                color={colorMode === 'light'? 'blue.600' : 'white' }
                                                fontFamily='Archivo Narrow'
                                                fontWeight='400'
                                                fontSize='14px'
                                                letterSpacing='0'
                                                _notLast={{ 
                                                    borderRight: '2px', 
                                                    borderRightColor: colorMode === 'light'? 'gray.300' : '#1E2D36'
                                                }}
                                                onClick={header.column.getToggleSortingHandler()}
                                                textTransform='none'>
                                                    <Flex>
                                                        {flexRender(
                                                            header.column.columnDef.header,
                                                            header.getContext()
                                                        )}
                                                        <Flex   
                                                            fontSize='12px'
                                                            color='gray.500' 
                                                            ml='2px'
                                                            w='5px'>
                                                                <Flex flexDir='column' justifyContent='center' w='20px'>
                                                                    <Button 
                                                                        aria-label="Sort Asc"
                                                                        onClick={() => console.log('sort up')}
                                                                        color={header.column.getIsSorted() === 'asc'? 'gray.700' : 'gray.400'}
                                                                        h='3px'
                                                                        minW='5px'>
                                                                            <TriangleUpIcon 
                                                                                fontSize='10px' />
                                                                    </Button>
                                                                    <Button 
                                                                        aria-label="Sort Desc"
                                                                        onClick={() => console.log('sort down')}
                                                                        color={header.column.getIsSorted() === 'desc' ? 'gray.700' : 'gray.400'}
                                                                        h='3px'
                                                                        minW='5px'
                                                                        mt='5px'>
                                                                            <TriangleDownIcon fontSize='10px' />
                                                                    </Button>
                                                                </Flex>
                                                        </Flex>
                                                    </Flex>
                                            </Th>
                                        );
                                    })}
                            </Tr>
                        ))}
                </Thead>
                <Tbody>
                    {getRowModel().rows.map((row, index) => (
                        <Tr 
                            bg={colorMode === 'light'? 'white' : '#455763'}
                            key={index}
                            h='25px'>
                                {row.getVisibleCells().map((cell, cellIndex) => {
                                    return (
                                        <Td 
                                            key={cellIndex}
                                            color={colorMode === 'light'? 'black' : 'white' }
                                            h='25px'
                                            paddingY='0'
                                            fontFamily='Archivo Narrow'
                                            fontWeight='400'
                                            fontSize='12px'
                                            borderBottom='2px'
                                            borderBottomColor={colorMode === 'light'? 'gray.300' : '#1E2D36'}
                                            _notLast={{ 
                                                borderRight: '2px', 
                                                borderRightColor: colorMode === 'light'? 'gray.300' : '#1E2D36', }}>
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </Td>
                                    );
                                })}
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Flex>
    )
}

export default DataTable