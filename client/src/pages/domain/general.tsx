import { Layout } from "@/components/layout/layout";
import { DOMAIN_DATA } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DomainGeneral() {
  return (
    <Layout>
      <div className="p-8 max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Domain</h1>
            <p className="text-muted-foreground">Manage domain information</p>
          </div>
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 border rounded-full shadow-sm">
            <span className="text-sm font-medium text-muted-foreground">Is it active?</span>
            <Switch checked={DOMAIN_DATA.isActive} />
          </div>
        </div>

        <Card className="shadow-sm border-border/60">
          <CardContent className="p-6 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="alias">Alias:</Label>
              <Input id="alias" defaultValue={DOMAIN_DATA.alias} className="max-w-md" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description:</Label>
              <Textarea id="description" defaultValue={DOMAIN_DATA.description} className="min-h-[100px] resize-none" />
            </div>
          </CardContent>
        </Card>

        <div>
          <h2 className="text-lg font-semibold mb-4">Configuration</h2>
          <Card className="shadow-sm border-border/60">
            <CardContent className="p-6 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="dialect">Dialect:</Label>
                <Select defaultValue={DOMAIN_DATA.dialect}>
                  <SelectTrigger className="max-w-md">
                    <SelectValue placeholder="Select dialect" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Snowflake">Snowflake</SelectItem>
                    <SelectItem value="PostgreSQL">PostgreSQL</SelectItem>
                    <SelectItem value="BigQuery">BigQuery</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="secret">Secret:*</Label>
                <Input id="secret" defaultValue={DOMAIN_DATA.secret} className="max-w-md" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="schema">Schema:*</Label>
                <Input id="schema" defaultValue={DOMAIN_DATA.schema} className="max-w-md" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="retriever">Retriever Top columns:</Label>
                <Input id="retriever" type="number" defaultValue={DOMAIN_DATA.retrieverTopColumns} className="max-w-md" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
