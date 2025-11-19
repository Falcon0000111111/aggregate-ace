"use client";

import { useState, useEffect, useMemo } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Stethoscope, RefreshCw } from "lucide-react";

export default function Calculator() {
  const [matric, setMatric] = useState('');
  const [inter, setInter] = useState('');
  const [mdcat, setMdcat] = useState('');

  const MATRIC_TOTAL = 1100;
  const MATRIC_WEIGHT = 10;
  const INTER_TOTAL = 1100;
  const INTER_WEIGHT = 40;
  const MDCAT_TOTAL = 200;
  const MDCAT_WEIGHT = 50;

  const aggregate = useMemo(() => {
    const matricScore = parseFloat(matric) || 0;
    const interScore = parseFloat(inter) || 0;
    const mdcatScore = parseFloat(mdcat) || 0;

    const matricContribution = (matricScore / MATRIC_TOTAL) * MATRIC_WEIGHT;
    const interContribution = (interScore / INTER_TOTAL) * INTER_WEIGHT;
    const mdcatContribution = (mdcatScore / MDCAT_TOTAL) * MDCAT_WEIGHT;

    const totalAggregate = matricContribution + interContribution + mdcatContribution;
    
    return totalAggregate > 100 ? 100 : totalAggregate;
  }, [matric, inter, mdcat]);

  const handleReset = () => {
    setMatric('');
    setInter('');
    setMdcat('');
  };

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>, max: number, min: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (value === '') {
      setter('');
      return;
    }

    const numValue = parseFloat(value);
    if (numValue > max) {
      value = max.toString();
    } else if (numValue < min) {
      value = min.toString();
    }
    
    setter(value);
  }

  return (
    <Card className="w-full max-w-lg mx-auto shadow-2xl backdrop-blur-sm bg-card/80">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-headline tracking-tight">AggregateAce</CardTitle>
        <CardDescription>Your medical college aggregate calculator</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="space-y-2">
          <Label htmlFor="matric" className="flex items-center gap-2 text-sm font-medium">
            <GraduationCap className="w-5 h-5 text-primary" />
            <span>Matric Marks (out of {MATRIC_TOTAL}) - {MATRIC_WEIGHT}% Weight</span>
          </Label>
          <Input
            id="matric"
            type="number"
            placeholder="e.g., 1050"
            value={matric}
            onChange={handleInputChange(setMatric, MATRIC_TOTAL, 0)}
            min="0"
            max={MATRIC_TOTAL}
            aria-label={`Matric marks out of ${MATRIC_TOTAL}`}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="inter" className="flex items-center gap-2 text-sm font-medium">
            <BookOpen className="w-5 h-5 text-primary" />
            <span>Intermediate Marks (out of {INTER_TOTAL}) - {INTER_WEIGHT}% Weight</span>
          </Label>
          <Input
            id="inter"
            type="number"
            placeholder="e.g., 1050"
            value={inter}
            onChange={handleInputChange(setInter, INTER_TOTAL, 0)}
            min="0"
            max={INTER_TOTAL}
            aria-label={`Intermediate marks out of ${INTER_TOTAL}`}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="mdcat" className="flex items-center gap-2 text-sm font-medium">
            <Stethoscope className="w-5 h-5 text-primary" />
            <span>MDCAT Marks (out of {MDCAT_TOTAL}) - {MDCAT_WEIGHT}% Weight</span>
          </Label>
          <Input
            id="mdcat"
            type="number"
            placeholder="e.g., 180"
            value={mdcat}
            onChange={handleInputChange(setMdcat, MDCAT_TOTAL, 0)}
            min="0"
            max={MDCAT_TOTAL}
            aria-label={`MDCAT marks out of ${MDCAT_TOTAL}`}
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center justify-center gap-4 p-6 bg-muted/50 rounded-b-lg mt-6">
        <div className="text-center">
          <p className="text-base font-medium text-muted-foreground">Your Aggregate Score</p>
          <p className="text-6xl font-extrabold tracking-tighter text-primary">
            {aggregate.toFixed(4)}%
          </p>
        </div>
        <Button onClick={handleReset} variant="outline" className="mt-2">
          <RefreshCw className="mr-2 h-4 w-4" /> Reset
        </Button>
      </CardFooter>
    </Card>
  );
}
