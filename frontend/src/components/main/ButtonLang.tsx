/**
 * =====================================================
 *  NAME    : ButtonLang.tsx
 *  DATE      : 23/09/2025
 *  DATE_MODIFY       : 23/09/2025
 *  DESCRIPTION: LANGUAGE SELECTOR BUTTON
 * =====================================================
 */

// DEPENDENCIES
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useLang } from "@/hooks/useLang";
import { Lang } from "@/store/tasks/langState";

// LOGIC
type ButtonLangProps = {
  t: (key: string) => string;
  className?: string;
};

// COMPONENT
const ButtonLang: React.FC<ButtonLangProps> = ({ t, className }) => {
  const [open, setOpen] = React.useState(false);
  const { lang, set } = useLang();
  const languages = [
    { value: "es", label: "Español" },
    { value: "en", label: "English" },
  ];
  const handleSelect = (code: string) => {
    set(code as Lang);
    setOpen(false);
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`w-[160px] justify-between text-white bg-transparent border-0 ${className}`}
        >
          {languages.find((l) => l.value === lang)?.label}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[160px] p-0">
        <Command>
          <CommandInput placeholder={t("ButtonLang.select-language")} />
          <CommandList>
            <CommandEmpty>{t("ButtonLang.no-language-found")}</CommandEmpty>
            <CommandGroup>
              {languages.map((l) => (
                <CommandItem
                  key={l.value}
                  value={l.value}
                  onSelect={() => handleSelect(l.value)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      lang === l.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {l.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
export default ButtonLang;
