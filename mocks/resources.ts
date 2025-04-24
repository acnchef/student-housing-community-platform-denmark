import { Resource, ResourceCategory } from "@/types";

export const resourceCategories: ResourceCategory[] = [
  {
    id: "1",
    name: "Housing",
    icon: "Home",
    description: "Information about finding and renting housing in Denmark",
  },
  {
    id: "2",
    name: "Visa & Residence",
    icon: "FileCheck",
    description: "Guides for visa applications and residence permits",
  },
  {
    id: "3",
    name: "Healthcare",
    icon: "Stethoscope",
    description: "Information about the Danish healthcare system",
  },
  {
    id: "4",
    name: "Education",
    icon: "GraduationCap",
    description: "Resources for students at Danish educational institutions",
  },
  {
    id: "5",
    name: "Transportation",
    icon: "Bus",
    description: "Information about public transportation in Denmark",
  },
  {
    id: "6",
    name: "Banking & Finance",
    icon: "Wallet",
    description: "Guides for banking and financial matters in Denmark",
  },
];

export const resources: Resource[] = [
  {
    id: "1",
    title: "Understanding Danish Rental Contracts",
    description: "A comprehensive guide to Danish rental contracts and tenant rights",
    content: `# Understanding Danish Rental Contracts

## Types of Rental Agreements

In Denmark, there are several types of rental agreements:

1. **Unlimited rental agreement (Tidsubegrænset lejekontrakt)**: This is the most common type and has no end date. The landlord can only terminate the contract under specific circumstances defined by law.

2. **Limited rental agreement (Tidsbegrænset lejekontrakt)**: This has a specific end date. The landlord must have a valid reason for making the contract time-limited.

3. **Room rental (Værelsesudlejning)**: When renting a single room in a shared apartment or house. These have fewer tenant protections.

## Key Contract Elements

Every rental contract should include:

- Names and addresses of both tenant and landlord
- Description of the rental property
- Start date (and end date for limited contracts)
- Rent amount and payment terms
- Deposit and prepaid rent amounts
- Maintenance responsibilities
- House rules
- Utility payment arrangements

## Deposits and Prepaid Rent

Danish law allows landlords to charge:
- Up to 3 months' rent as a deposit
- Up to 3 months' rent as prepaid rent

The deposit covers potential damages and unpaid bills when you move out. Prepaid rent typically covers your last months in the property.

## Rent Increases

For properties built after 1991, rent increases are typically regulated by the contract terms and the net price index. For older properties, strict rent control may apply.

## Termination

As a tenant, you typically need to give 3 months' notice to terminate your contract. Landlords can only terminate unlimited contracts under specific circumstances, such as:
- The landlord needs to use the property themselves
- Major renovations requiring vacancy
- Serious breach of contract by the tenant

## Important Resources

- The Danish Rent Act (Lejeloven): The primary law governing rental agreements
- The Tenants' Association (Lejernes Landsorganisation): Provides advice and assistance to tenants
- The Rent Tribunal (Huslejenævnet): Resolves disputes between landlords and tenants

Always have your contract reviewed by a legal professional or tenant association before signing.`,
    categoryId: "1",
    categoryName: "Housing",
    thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    createdAt: "2023-01-15T10:00:00Z",
    updatedAt: "2023-01-15T10:00:00Z",
  },
  {
    id: "2",
    title: "Student Residence Permit Guide",
    description: "Step-by-step guide to applying for a student residence permit in Denmark",
    content: `# Student Residence Permit Guide

## Before Applying

Before you can apply for a residence permit as a student in Denmark, you need:

1. **Acceptance letter** from a Danish educational institution
2. **Proof of financial means** to support yourself during your studies
3. **Valid passport** with at least 6 months validity beyond your planned stay
4. **Health insurance** coverage for the initial period

## Application Process

### Step 1: Create a Case Order ID
Visit the Danish Immigration Service website (newtodenmark.dk) and create a Case Order ID. You'll need to pay the application fee at this stage.

### Step 2: Complete the Application Form
Fill out form ST1 for students. Be thorough and accurate with all information.

### Step 3: Submit Biometrics
After submitting your application, you'll need to have your biometrics (fingerprints and photo) recorded at a Danish embassy or consulate in your home country.

### Step 4: Wait for Processing
Processing times vary but typically take 1-2 months. You can check your case status online.

### Step 5: Receive Your Residence Card
If approved, you'll receive a residence card after arriving in Denmark.

## Financial Requirements

You must document that you have enough money to support yourself during your stay. For 2023, this amount is DKK 6,600 per month (approximately EUR 885).

You can document this through:
- Bank statements showing sufficient funds
- Scholarship award letters
- Documentation of student loans

## After Arrival

Once in Denmark, you must:

1. **Register with the Civil Registration System (CPR)** at your local Citizen Service Center
2. **Open a Danish bank account**
3. **Register with the tax authorities**
4. **Apply for a health insurance card**

## Permit Renewal

Student residence permits are typically issued for the duration of your study program plus 6 months. If your studies take longer, you'll need to apply for an extension before your current permit expires.

## Work Permissions

With a student residence permit, you're allowed to work 20 hours per week during the semester and full-time during summer holidays (June, July, and August).

## Important Contacts

- **Danish Immigration Service (SIRI)**: For residence permit questions
- **International Citizen Service**: For help with CPR registration and other practical matters
- **Your university's international office**: For guidance specific to your institution`,
    categoryId: "2",
    categoryName: "Visa & Residence",
    thumbnail: "https://images.unsplash.com/photo-1586769852836-bc069f19e1be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    createdAt: "2023-01-10T14:30:00Z",
    updatedAt: "2023-01-10T14:30:00Z",
  },
  {
    id: "3",
    title: "Danish Healthcare System for International Students",
    description: "Overview of healthcare access and services for international students in Denmark",
    content: `# Danish Healthcare System for International Students

## Healthcare Coverage

As an international student in Denmark, your healthcare coverage depends on your country of origin and length of stay:

### EU/EEA/Swiss Citizens
- Use your European Health Insurance Card (EHIC) for the first 3 months
- After registering for a CPR number, you'll be covered by the Danish public healthcare system

### Non-EU/EEA/Swiss Citizens
- Must have private health insurance for the first 6 weeks
- After obtaining a CPR number, you'll be covered by the Danish public healthcare system

## Getting a Yellow Health Insurance Card

The yellow health insurance card (sundhedskort) is your key to accessing healthcare services:

1. You'll receive it automatically after registering for a CPR number
2. It shows your name, address, CPR number, and your assigned general practitioner (GP)
3. Always carry it with you and present it when seeking medical care

## Accessing Healthcare Services

### General Practitioner (GP)
- Your GP is your primary healthcare contact
- Make appointments for non-emergency medical issues
- GPs provide referrals to specialists when needed
- Consultations are free with your yellow card

### Emergency Services
- For life-threatening emergencies, call 112
- For urgent but non-life-threatening issues, call 1813 in the Capital Region or visit an emergency department (akutmodtagelse)

### Specialists
- Require a referral from your GP
- Free of charge with your yellow card

### Dentists
- Not fully covered by public healthcare
- Students must pay for dental services (partial reimbursement possible)
- Consider private dental insurance

### Pharmacies (Apotek)
- Prescription medications require a prescription from a doctor
- Some costs are subsidized, but you'll pay a portion
- Over-the-counter medications are available without prescription

## Mental Health Services

- Your GP can refer you to psychological services
- Universities often offer counseling services
- Student counseling service (Studenterrådgivningen) provides free counseling

## Useful Danish Medical Phrases

- "Jeg har brug for en læge" - I need a doctor
- "Jeg er syg" - I am sick
- "Jeg har ondt i..." - I have pain in...
- "Jeg har brug for medicin" - I need medication
- "Jeg har en tid bestilt" - I have an appointment

## Important Contacts

- Emergency: 112
- Medical helpline (Capital Region): 1813
- Poison Control Center: 8212 1212`,
    categoryId: "3",
    categoryName: "Healthcare",
    thumbnail: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    createdAt: "2023-01-05T09:15:00Z",
    updatedAt: "2023-01-05T09:15:00Z",
  },
  {
    id: "4",
    title: "Public Transportation in Copenhagen",
    description: "Guide to navigating Copenhagen's public transportation system",
    content: `# Public Transportation in Copenhagen

## Overview

Copenhagen has an extensive and efficient public transportation system that includes:

- Metro
- S-trains (S-tog)
- Regional trains
- Buses
- Harbor buses (water buses)

The system operates on a zone-based fare structure and is integrated, allowing you to use the same ticket across different types of transport.

## Ticketing System

### Rejsekort (Travel Card)
- Reloadable smart card for public transportation
- Cheaper than single tickets
- Requires check-in and check-out for each journey
- Available as personal, flex, or anonymous cards
- Get it at stations, selected 7-Eleven stores, or online

### Mobile Tickets
- Purchase via the DOT (Din Offentlige Transport) app
- Select your zones and ticket type
- Activate before boarding

### Single Tickets
- Available from ticket machines at stations
- Valid for a set time period (typically 1-2 hours)
- More expensive than Rejsekort

### City Pass
- Unlimited travel within central Copenhagen (zones 1-4)
- Available for 24 or 72 hours
- Good option for short-term visitors

## Zone System

Copenhagen's public transport is divided into zones:
- Zone 1: City center
- Zone 2: Inner suburbs
- Zone 3 and beyond: Outer areas

Your fare depends on how many zones you travel through. Most student activities will be within zones 1-2.

## Metro

- Runs 24/7
- Two main lines (M1 and M2) plus the City Circle Line (M3)
- Trains every 2-4 minutes during peak hours
- Connects major areas including the airport, city center, and universities

## S-trains (S-tog)

- Suburban rail network
- Seven lines (A, B, C, E, F, H)
- Connects Copenhagen with surrounding municipalities
- Runs from early morning until around 1 AM (all night on weekends)

## Buses

- Extensive network covering areas not served by trains
- A-buses: High-frequency routes in central Copenhagen
- S-buses: Express routes with fewer stops
- Night buses (N-buses): Operate when trains aren't running

## Cycling

Copenhagen is one of the world's most bicycle-friendly cities:
- Extensive dedicated bike lanes
- Bike rentals and sharing systems available
- Many students prefer cycling as their primary transportation

## Tips for Students

- Consider getting a Rejsekort for regular travel
- Download the DOT and Rejseplanen apps for journey planning
- Look into student discounts for monthly passes
- Invest in a bicycle for daily commuting
- Remember to always check in and out with your Rejsekort

## Useful Apps

- **Rejseplanen**: Journey planning across all public transport
- **DOT**: Purchase mobile tickets
- **Rejsekort**: Manage your travel card
- **Donkey Republic/Bycyklen**: Bike sharing services`,
    categoryId: "5",
    categoryName: "Transportation",
    thumbnail: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    createdAt: "2023-01-02T11:45:00Z",
    updatedAt: "2023-01-02T11:45:00Z",
  },
  {
    id: "5",
    title: "Banking in Denmark for International Students",
    description: "How to open a bank account and manage finances as an international student",
    content: `# Banking in Denmark for International Students

## Why Open a Danish Bank Account?

As an international student in Denmark, opening a local bank account offers several advantages:

- Receive your salary if you work part-time
- Pay rent and bills more easily
- Avoid foreign transaction fees
- Access to Danish mobile payment systems (MobilePay)
- Establish financial presence in Denmark

## Requirements for Opening an Account

To open a bank account in Denmark, you'll typically need:

1. **CPR number** (personal registration number)
2. **Valid passport or national ID** (for EU citizens)
3. **Residence permit** (for non-EU citizens)
4. **Proof of address** in Denmark
5. **Proof of enrollment** at your educational institution
6. **Tax identification number** from your home country

## Popular Banks for Students

Several Danish banks offer student-friendly accounts:

### Danske Bank
- Student account with no monthly fees
- Free Visa/Debit card
- Mobile banking app in English
- MobilePay integration

### Nordea
- Free student account
- International debit card
- Online banking in English
- Branches in many cities

### Nykredit
- Free student banking
- Visa/Debit card
- Mobile banking

### Arbejdernes Landsbank
- Voted Denmark's best bank multiple times
- Student-friendly services
- Good customer service

## The Account Opening Process

1. **Book an appointment** with your chosen bank
2. **Prepare all required documents**
3. **Attend the meeting** (bring an interpreter if needed)
4. **Sign the account agreement**
5. **Receive your account details** (usually immediately)
6. **Wait for your debit card** (typically 7-10 business days)
7. **Activate online banking**

## Banking Fees to Be Aware Of

- **Account maintenance**: Most student accounts are free
- **Card fees**: Annual fee for certain types of cards
- **ATM withdrawals**: Usually free at your own bank's ATMs
- **International transfers**: Can be expensive
- **Currency exchange**: Check rates and fees

## MobilePay

MobilePay is Denmark's most popular mobile payment app:

- Send and receive money using phone numbers
- Pay in stores and online
- Split bills easily
- Requires a Danish bank account and CPR number
- Available in English

## NemID/MitID

NemID (being replaced by MitID) is Denmark's digital signature system:

- Required for online banking
- Used for accessing public services
- Secure authentication for many websites
- You'll receive it when opening your bank account

## Budgeting Tips for Students in Denmark

- Average monthly expenses: DKK 8,000-10,000
- Rent will be your biggest expense (DKK 3,000-6,000)
- Food costs approximately DKK 1,500-2,000 monthly
- Transportation: Consider a bike or monthly public transport pass
- Take advantage of student discounts with your student ID

## Useful Danish Banking Terms

- Konto: Account
- Betalingskort: Payment card
- Overførsel: Transfer
- Rente: Interest rate
- Gebyr: Fee
- Lån: Loan
- Opsparing: Savings`,
    categoryId: "6",
    categoryName: "Banking & Finance",
    thumbnail: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    createdAt: "2022-12-28T16:20:00Z",
    updatedAt: "2022-12-28T16:20:00Z",
  },
];