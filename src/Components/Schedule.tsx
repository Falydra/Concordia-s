import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { cn } from "@/lib/utils"

import { Button } from "@/Components/ui/button"
import { Calendar } from "@/Components/ui/calendar"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ui/popover"
 
const FormSchema = z.object({
  dob: z.date({
    required_error: "Jadwal Pertemuan harus diisi.",
  }),
})
 
export function ScheduleForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
 
  function onSubmit(data: z.infer<typeof FormSchema>) {
    const formattedDate = format(data.dob, "PPP");
    const subject = encodeURIComponent("Meeting Request");
    const body = encodeURIComponent(`I would like to have a meet with you on ${formattedDate}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=daffa.meganendra@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
  }
 
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col text-dark-bg">
              <FormLabel>Jadwal Pertemuan</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-dark-bg"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Pilih waktu untuk mengatur pertemuan
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}