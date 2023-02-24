import fs from "fs";
import { OutputTarget } from "../Summary";

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    fs.writeFileSync(
      "report.html",
      `
            <div>
                <h1>Analysis Output</h1>
                <div>${report}</div>
            </div>
        `
    );
  }
}
