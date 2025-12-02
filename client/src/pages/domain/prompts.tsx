import { Layout } from "@/components/layout/layout";
import { PROMPTS } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Pencil, Trash2 } from "lucide-react";

export default function DomainPrompts() {
  return (
    <Layout>
      <div className="p-8 max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Domain Prompts</h1>
            <p className="text-muted-foreground">Additional prompt instructions to guide the model for this domain.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg border shadow-sm">
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow>
                <TableHead className="w-[50px]">Row</TableHead>
                <TableHead className="w-[150px]">Key</TableHead>
                <TableHead className="w-[100px]">Type</TableHead>
                <TableHead>Prompt</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {PROMPTS.map((p, i) => (
                <TableRow key={p.id} className="group">
                  <TableCell className="text-muted-foreground">{i + 1}</TableCell>
                  <TableCell className="font-medium">{p.key}</TableCell>
                  <TableCell className="text-xs font-medium text-muted-foreground">{p.type}</TableCell>
                  <TableCell className="text-sm text-muted-foreground leading-relaxed py-4">{p.prompt}</TableCell>
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
