export type Section = {
  [key: string]: string | number | boolean | string[] | number[] | Section;
};
export type ConfigFile = { [key: string]: Section };

export default class KlipperConfigParser {
  parse(text: string): ConfigFile {
    const config: ConfigFile = {};
    let current_section_path: string[] = [];
    let current_section: ConfigFile | Section = config;
    let current_multi_line_key: null | string = null;

    for (const line of text.split("\n")) {
      if (line.startsWith("[")) {
        current_section_path = line.slice(line.indexOf("[") + 1, line.lastIndexOf("]")).split(" ");

        // Populate
        current_section = config;
        for (const section of current_section_path) {
          if (!current_section[section]) {
            current_section[section] = {};
          }
          current_section = current_section[section] as Section;
        }
      } else if (current_multi_line_key && line.startsWith("\t")) {
        if (!current_section[current_multi_line_key]) {
          current_section[current_multi_line_key] = line.slice(1);
        } else {
          current_section[current_multi_line_key] += "\n" + line.slice(1);
        }
      } else {
        if (current_multi_line_key) {
          current_multi_line_key = null;
        }

        const [key, value] = line.split("=", 2).map((s) => s.trim());
        current_multi_line_key = key;

        if (value) {
          current_section[key.trim()] =
            value.toLocaleLowerCase() === "true"
              ? true
              : value.toLowerCase() === "false"
              ? false
              : /^\d+$/.test(value)
              ? parseInt(value)
              : /^\d+\.\d+$/.test(value)
              ? parseFloat(value)
              : value;
        }
      }
    }

    return config;
  }
}
