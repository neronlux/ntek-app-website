import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Send } from "lucide-react";

export default function CTASection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: { name: string; email: string; message: string }) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setName("");
      setEmail("");
      setMessage("");
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate({ name, email, message });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-6" data-testid="text-cta-title">
            Contact Me
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-cta-description">
            Have questions about ntek.app? Send me a message and I'll get back to you soon.
          </p>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                data-testid="input-contact-name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                data-testid="input-contact-email"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell me about your project or ask any questions..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                className="resize-none"
                data-testid="input-contact-message"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={contactMutation.isPending}
              data-testid="button-send-message"
            >
              {contactMutation.isPending ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
