import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { schools } from "@/data/schools";

export default function SchoolVisits() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">🎓 School Visits</h1>
      <p className="text-center text-gray-600 mb-6">
        Explore reports and media from the various schools we’ve visited.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {schools.map((school) => (
          <Card key={school.id} className="shadow-md">
            <CardHeader>
              <CardTitle>{school.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{school.description}</p>

              <div className="flex gap-3">
                <Link to={`/media/${school.id}`} className="flex-1">
                  <Button className="w-full">🎥 View Media</Button>
                </Link>
                <Link to={`/report/${school.id}`} className="flex-1">
                  <Button variant="outline" className="w-full">
                    📑 Read Report
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
