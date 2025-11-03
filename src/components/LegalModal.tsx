import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import { Calendar, FileText } from "lucide-react";

interface LegalSection {
  title: string;
  content: string[];
}

interface LegalContent {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: LegalContent;
}

export function LegalModal({ isOpen, onClose, content }: LegalModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0" aria-describedby="legal-description">
        <DialogHeader className="px-6 pt-6 pb-4 border-b">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A84FF] to-[#4FC3F7] flex items-center justify-center">
              <FileText className="text-white" size={20} />
            </div>
            <DialogTitle className="text-2xl">{content.title}</DialogTitle>
          </div>
          <DialogDescription id="legal-description" className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar size={16} />
            <span>Última atualização: {content.lastUpdated}</span>
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[calc(90vh-120px)] px-6 py-4">
          <div className="space-y-8 pb-6">
            {content.sections.map((section, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-lg text-[#1C1C1E]">{section.title}</h3>
                <div className="space-y-2">
                  {section.content.map((paragraph, pIndex) => {
                    // Check if paragraph is a list item
                    if (paragraph.startsWith("•")) {
                      return (
                        <p key={pIndex} className="text-gray-600 pl-4">
                          {paragraph}
                        </p>
                      );
                    }
                    // Check if paragraph is bold (markdown style)
                    if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                      return (
                        <p key={pIndex} className="text-[#1C1C1E] mt-3">
                          {paragraph.replace(/\*\*/g, "")}
                        </p>
                      );
                    }
                    // Check if paragraph contains bold text
                    if (paragraph.includes("**")) {
                      const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                      return (
                        <p key={pIndex} className="text-gray-600 leading-relaxed">
                          {parts.map((part, i) => {
                            if (part.startsWith("**") && part.endsWith("**")) {
                              return <strong key={i} className="text-[#1C1C1E]">{part.replace(/\*\*/g, "")}</strong>;
                            }
                            return part;
                          })}
                        </p>
                      );
                    }
                    // Empty paragraphs for spacing
                    if (paragraph === "") {
                      return <div key={pIndex} className="h-2" />;
                    }
                    // Regular paragraphs
                    return (
                      <p key={pIndex} className="text-gray-600 leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </div>
            ))}
            
            {/* Footer */}
            <div className="mt-12 pt-6 border-t">
              <div className="bg-gradient-to-br from-[#0A84FF]/5 to-[#4FC3F7]/5 rounded-2xl p-6 border border-[#0A84FF]/10">
                <h4 className="text-[#1C1C1E] mb-3">Dúvidas?</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Se você tiver alguma dúvida sobre este documento ou precisar de mais informações, entre em contato conosco:
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">
                    <strong className="text-[#1C1C1E]">E-mail:</strong> contato@multsystems.com.br
                  </p>
                  <p className="text-gray-600">
                    <strong className="text-[#1C1C1E]">Telefone:</strong> (11) 3456-7890
                  </p>
                  <p className="text-gray-600">
                    <strong className="text-[#1C1C1E]">WhatsApp:</strong> (11) 99999-9999
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
