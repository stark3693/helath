
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Cup Comfort Guide</h1>
          <p className="text-xl mb-8 opacity-90">
            Your comprehensive resource for menstrual cup education and guidance
          </p>
          <Link to="/menstrual-cup-guide">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            What You'll Learn
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  Safety Information
                </CardTitle>
                <CardDescription>
                  Comprehensive safety guidelines and medical information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn about proper usage, hygiene practices, and when to consult healthcare providers.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  Personal Guidance
                </CardTitle>
                <CardDescription>
                  Tailored advice for different experience levels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get specific guidance whether you're sexually active or new to internal menstrual products.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  Practical Tips
                </CardTitle>
                <CardDescription>
                  Step-by-step instructions and helpful techniques
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Master insertion, removal, and maintenance with our detailed guides and tips.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            Ready to Learn More?
          </h2>
          <p className="text-lg mb-8 text-muted-foreground">
            Access our comprehensive menstrual cup guide with medical information and practical advice.
          </p>
          <Link to="/menstrual-cup-guide">
            <Button size="lg" className="text-lg px-8 py-3">
              View Complete Guide
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
