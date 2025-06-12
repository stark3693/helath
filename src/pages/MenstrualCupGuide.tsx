
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const MenstrualCupGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-2">
            Menstrual Cup Guide
          </h1>
          <p className="text-lg text-center opacity-90">
            Complete information for safe and comfortable use
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">
              Understanding Menstrual Cups
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Menstrual cups are eco-friendly, reusable alternatives to pads and tampons. 
              They can be used safely by most people who menstruate, regardless of sexual experience. 
              However, comfort levels and ease of use may vary based on individual factors.
            </p>
          </CardContent>
        </Card>

        {/* Comparison Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Sexually Active Users */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-xl text-green-800 flex items-center gap-2">
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  ✅ Generally Easier
                </Badge>
                Sexually Active Users
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">
                    <strong>Experience with insertion:</strong> Usually more comfortable 
                    due to prior experience with tampons or intercourse
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">
                    <strong>Relaxed muscles:</strong> Vaginal muscles tend to be more 
                    relaxed, making insertion and removal smoother
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">
                    <strong>Less hymen concern:</strong> Hymen concerns are typically 
                    not a factor
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Virgin Users */}
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-xl text-amber-800 flex items-center gap-2">
                <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                  ⚠️ Requires Patience
                </Badge>
                Virgin Users
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">
                    <strong>Tighter muscles:</strong> May experience more resistance 
                    during insertion and removal initially
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">
                    <strong>Hymen considerations:</strong> Cup insertion may stretch 
                    or affect the hymen
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">
                    <strong>Learning curve:</strong> May need more time and practice 
                    to feel comfortable
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information for Virgin Users */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">
              Is It Difficult for Virgin Girls to Use a Menstrual Cup?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Using a menstrual cup can be a new experience for any girl or woman, especially 
              for those who have never been sexually active. For virgin girls, the process may 
              feel uncomfortable or even slightly painful at first due to the firmness of the 
              vaginal muscles and the presence of the hymen.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 font-medium">
                <strong>Important:</strong> Being a virgin does not medically prevent someone 
                from using a menstrual cup. However, those who have not engaged in penetrative 
                sexual activity may find insertion more challenging initially.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Key Considerations:</h3>
              
              <div className="grid gap-4">
                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Tight Vaginal Muscles</h4>
                  <p className="text-sm text-muted-foreground">
                    Virgin girls often have tighter vaginal muscles, which can make insertion 
                    and removal of the cup feel uncomfortable or even slightly painful at first.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Hymen Concerns</h4>
                  <p className="text-sm text-muted-foreground">
                    Inserting a menstrual cup may stretch or tear the hymen, which can be 
                    a concern for some due to cultural or personal reasons.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Size and Flexibility</h4>
                  <p className="text-sm text-muted-foreground">
                    Many brands offer small or teen-sized cups designed specifically for 
                    beginners or younger users, which are easier to insert.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Practice and Patience</h4>
                  <p className="text-sm text-muted-foreground">
                    It often takes a few cycles to get comfortable with insertion, removal, 
                    and finding the right folding technique.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips and Recommendations */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">
              Tips for Comfortable Use
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">For Beginners:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Start with a smaller size cup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Use water-based lubricant if needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Try different folding techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Practice during lighter flow days</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">General Tips:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Relax and take your time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Find a comfortable position</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Keep fingernails short and clean</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Sterilize before first use</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conclusion */}
        <Card className="bg-secondary">
          <CardHeader>
            <CardTitle className="text-xl text-primary">Conclusion</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">
              While it is not impossible for a virgin girl to use a menstrual cup, it may 
              require more time, patience, and gentle practice. For some, waiting until 
              after becoming sexually active can make the experience easier and more comfortable.
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <p className="text-primary font-medium">
                <strong>Remember:</strong> Always listen to your body and choose the menstrual 
                product that makes you feel the most at ease. There's no rush, and every person's 
                experience is unique.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            This information is for educational purposes only and should not replace 
            professional medical advice. Consult with a healthcare provider for personalized guidance.
          </p>
        </div>
      </main>
    </div>
  );
};

export default MenstrualCupGuide;
