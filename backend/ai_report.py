def generate_report(data, result):

    if "Diabetes" in result:

        if result == "High Risk of Diabetes":
            advice = """
• Reduce sugar intake  
• Exercise daily  
• Maintain healthy BMI  
• Check blood glucose regularly
"""
        else:
            advice = "Maintain healthy diet and regular exercise."

    else:

        if result == "High Risk of Heart Disease":
            advice = """
• Reduce cholesterol foods  
• Do cardio exercise  
• Avoid smoking  
• Monitor blood pressure
"""
        else:
            advice = "Your heart risk looks low. Maintain healthy lifestyle."

    return {
        "result": result,
        "advice": advice
    }