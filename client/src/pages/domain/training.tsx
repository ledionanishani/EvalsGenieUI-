import { Layout } from "@/components/layout/layout";
import { TRAINING_EXAMPLES } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Pencil, Trash2 } from "lucide-react";

export default function DomainTraining() {
  return (
    <Layout>
      <div className="p-8 max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Training examples</h1>
            <p className="text-muted-foreground">Fewshot examples to help ViaQuery how to answer questions</p>
          </div>
          <Button className="gap-2 bg-indigo-600 hover:bg-indigo-700">
            <Plus className="w-4 h-4" />
            Add example
          </Button>
        </div>

        <div className="bg-white rounded-lg border shadow-sm">
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow>
                <TableHead className="w-[50px]">Row</TableHead>
                <TableHead className="w-[500px]">Question</TableHead>
                <TableHead>Types</TableHead>
                <TableHead>Tables</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {TRAINING_EXAMPLES.map((ex) => (
                <TableRow key={ex.id} className="group">
                  <TableCell className="text-muted-foreground">{ex.id}</TableCell>
                  <TableCell className="font-medium leading-relaxed py-4">{ex.question}</TableCell>
                  <TableCell className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{ex.type}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    <ul className="list-disc list-inside">
                        {ex.tables.map(t => <li key={t}>{t}</li>)}
                    </ul>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button variant="ghost" size="icon" className="h-8 w-8"><Pencil className="w-4 h-4 text-muted-foreground" /></Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8"><Trash2 className="w-4 h-4 text-muted-foreground" /></Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Layout>
  );
}
