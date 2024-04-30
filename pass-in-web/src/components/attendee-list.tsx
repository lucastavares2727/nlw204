import {
  Search,
  MoreHorizontal,
  ChevronLeft,
  ChevronsLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";
import { TableRow } from "./table/table-row";
import { ChangeEvent, useState } from "react";
import { attendees } from "../data/attendeers";
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)



export function AttendeeList() {


  const [search, setSearch] = useState('')

  function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>){
    setSearch(event.target.value)
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center ">
        <h1 className="text-2xl font-bold text-white ">Participantes </h1>
        <div
          className="px-3 w-72   text-sm bg-cyan-50  py-1.5 broder broder-while/10 rounded-lg flex items-center gap-3
            "
        >
          <Search className="size-5 flex items-center gray-800" />
          <input onChange={onSearchInputChanged}
            className="bg-transparent flex-1  border-0 outline-none"
            placeholder="Buscar participante..."
          />
        </div>
        
        
      </div>

      <Table>
        <thead>
          <tr className="border-b border-white/10">
            <TableHeader 
              style={{ width: 60 }}
              className="py-3 px-4 text-sm font-semibold text-left">
              <input
                className="size-4 bg-orange-300 rounded border border-white/20 "
                type="checkbox"
              />
            </TableHeader>
            <TableHeader > Codigo </TableHeader>
            <TableHeader >  Participante </TableHeader>
            <TableHeader >  Data de inscricao </TableHeader>
            <TableHeader > Data de Check-In </TableHeader>
            <TableHeader style={{ width: 69 }} >  </TableHeader>
          </tr>
        </thead>
        <tbody>
          {attendees.map((attendee) => {
            return (
              <TableRow
                key={attendee.id}
               
              >
                <TableCell >
                  <input
                    className="size-4 bg-orange-300 rounded border border-white/20"
                    type="checkbox"
                  />
                </TableCell>
                <TableCell className="py-3 px-4 text-sm text-white/100 ">12354</TableCell>

                <TableCell className="py-3 px-4 text-sm text-white/100 ">
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white/100">
                     
                     {attendee.name}
                    </span>
                    <span>{attendee.email}</span>
                  </div>
                </TableCell>

                <TableCell > {dayjs(attendee.checketInAt).toNow()}</TableCell>
                
                
                <TableCell >{dayjs(attendee.checketInAt).toNow()}</TableCell>
                <TableCell >
                  <button className="bg-black/20 border border-white/10 rounded-md p-1.5 ">
                    <MoreHorizontal className="size-4 text-white" />
                  </button>
                </TableCell>
              </TableRow>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td className=" py-3 px-4 text-sm text-white/100" colSpan={3}>
              Mostrando 10 de 200
            </td>
            <td
              className=" py-3 px-4 text-sm text-white/100 text-right"
              colSpan={3}
            >
              <div className="inline-flex items-center gap-8">
                <span>Pagina 1 de 23</span>

                <div className="flex gap-1.5">
                  <IconButton>
                    <ChevronsLeft className="size-4" />
                  </IconButton>

                  <IconButton>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}
